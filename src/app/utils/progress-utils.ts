import { LoadingController, ToastController } from '@ionic/angular';

export class ProgressUtils {

    public static loadingAfterSubmitButton(loadingController: LoadingController, message?: string, duration?: number) {
        return loadingController.create({
            message: message ? message : 'Please wait...',
            spinner: "dots",
            duration
        })
    }

    public static displayToast(toastController: ToastController, message: string, duration?: number, handler?: () => void) {
        return toastController.create({
            message,
            animated: true,
            duration: duration ? duration : 2000,
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
