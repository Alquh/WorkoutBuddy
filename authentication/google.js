import * as Google from "expo-google-app-auth";

// important to note that this package has been deprecated.
import { androidClientId, iosClientId } from "../superSecretKey";

async function googleAuthentication() {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await Google.logInAsync({
				behavior: "web",
				androidClientId: androidClientId,
				iosClientId: iosClientId,
				scopes: ["profile", "email"],
			});

			// Want to see your result? Uncomment the following lines.
			// console.log("Result");
			// console.log(result);

			// Always return a consistend object model.
			if (result.type === "success") {
				resolve({ result: result.accessToken, success: true });
			} else {
				resolve({ result: "cancelled", success: false });
			}
		} catch (e) {
			resolve({ result: "error", success: false });
		}
	});
}

export default googleAuthentication;
