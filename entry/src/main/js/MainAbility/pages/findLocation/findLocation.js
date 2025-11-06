import geolocation from '@system.geolocation';
import router from '@ohos.router';

export default {
    data: {
        geolocationGetData: {
            latitude: '',
            longitude: '',
            altitude: '',
            accuracy: '',
        },
    },

    getGeolocation: function () {
        var that = this
        {
            geolocation.getLocation({
                timeout: 90000,
                success: function (location) {
                    that.geolocationGetData = location

                    router.replace({
                        uri: 'pages/locationList/locationList',
                        params:{
                            lat1: location.latitude,
                            long1: location.longitude,
                        } ,
                    });

                },
                fail: function (errorMsg, errorCode) {
                    console.info(errorCode + ': ' + errorMsg)
                },

            })
        }
    },

    swipeHandler(e) {
        if (e.direction == "right") {
            //app.terminate();
        }
    },
}
