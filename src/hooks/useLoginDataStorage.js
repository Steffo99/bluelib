import { useEffect, useState } from 'preact/hooks';
import { royalnetApiRequest } from '../utils/royalnetApiRequest';

export default function(defaultInstanceUrl) {
	const [instanceUrl, setInstanceUrl] = useState(defaultInstanceUrl);
	const [loginStatus, setLoginStatus] = useState(null);

	useEffect(() => {
		console.debug("Checking if an instanceUrl is stored in the localStorage...");
		let instanceUrlStore = window.localStorage.getItem("instanceUrl");
		if(!instanceUrlStore) return;
		console.debug(`Found instanceUrl ${instanceUrlStore}, setting it...`);
		setInstanceUrl(instanceUrlStore);
		console.debug("Checking if a valid login token is stored in the localStorage...");
		let loginStatusStore = JSON.parse(window.localStorage.getItem("loginStatus"));
		if(!loginStatusStore) return;
		console.debug("Found a login token; checking its validity...");
		royalnetApiRequest(instanceUrlStore,  "GET", "/api/auth/token/v1", {token: loginStatusStore.token}).then((data => {
			let expiration = new Date(data.expiration);
			console.debug(`Login token expires: ${expiration}`);
			let now = new Date();
			if(expiration >= now ) {
				console.debug(`Login token is valid, logging in...`);
				setLoginStatus(data);
				console.debug(`Successfully logged in as ${data.user.username} @ ${instanceUrlStore} !`);
			}
			else {
				console.debug(`Login token has expired, clearing...`);
				window.localStorage.setItem("loginStatus", null);
			}
		})).catch((err) => {
			console.error(`Could not check validity of the login token: ${err}`)
		})
	}, []);

	function storeValues(newInstanceUrl, newLoginStatus) {
		if(newLoginStatus !== null) {
			console.debug(`Successfully logged in as ${newLoginStatus.user.username} @ ${newInstanceUrl} !`);
		}
		else {
			console.debug(`Changed instanceUrl to ${newInstanceUrl} !`);
		}
		setInstanceUrl(newInstanceUrl);
		setLoginStatus(newLoginStatus);
		console.debug("Saving login data in the localStorage...");
		window.localStorage.setItem("instanceUrl", newInstanceUrl);
		window.localStorage.setItem("loginStatus", JSON.stringify(newLoginStatus));
	}

	function logout() {
		console.debug("User requested logout, clearing loginStatus and localStorage...");
		setLoginStatus(null);
		window.localStorage.setItem("loginStatus", null);
	}

	return [instanceUrl, loginStatus, storeValues, logout]
}
