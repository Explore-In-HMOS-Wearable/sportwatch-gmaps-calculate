import router from '@ohos.router';
import app from '@system.app';

export default {
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