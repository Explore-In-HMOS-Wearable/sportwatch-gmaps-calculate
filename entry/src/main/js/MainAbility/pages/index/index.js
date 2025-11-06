import router from '@ohos.router';
import app from '@system.app';

export default {
    swipeHandler(e) {
        if (e.direction == "right") {
            app.terminate();
        }
    },
    onInit() {
       this.router();
    },
     router() {
        setTimeout(() => {
            router.replace({
                uri: 'pages/findLocation/findLocation'
            });
        }, 10000)
    }
}