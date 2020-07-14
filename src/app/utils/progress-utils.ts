import { LoadingController, ToastController } from '@ionic/angular';

export class ProgressUtils {

    public static loadingAfterSubmitButton(loadingController: LoadingController) {
        return loadingController.create({
            message: 'Please wait...',
            spinner: "dots",
            duration: 1000
        })
    }

    public static displayToast(toastController: ToastController, message: string, handler?: () => void) {
        return toastController.create({
            message, 
            animated: true,
            duration: 2000,
            buttons: [
                {
                    text: 'Okay',
                    role: 'cancel',
                    handler
                }
            ]
        })
    }
}
