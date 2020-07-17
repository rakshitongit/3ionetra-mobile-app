import { LoadingController, ToastController } from '@ionic/angular';

export class ProgressUtils {

    public static loadingAfterSubmitButton(loadingController: LoadingController, message?: string, duration?: number) {
        return loadingController.create({
            message: message ? message : 'Please wait...',
            spinner: "dots",
            duration
        })
    }

    public static displayToast(toastController: ToastController, message: string, handler?: () => void) {
        return toastController.create({
            message, 
            animated: true,
            duration: 2500,
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
