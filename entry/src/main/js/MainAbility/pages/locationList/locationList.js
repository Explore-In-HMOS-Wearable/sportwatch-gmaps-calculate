import router from '@ohos.router';

export default {
    data: {
        title: '',
        lat1: 0,
        long1: 0,
        lat2: 0,
        long2: 0,
        locationData: [
            {
                'lat': 41.0082,
                'long': 28.9784,
                'location': 'Luna Dining',
                'accuracy': 15
            },
            {
                'lat': 38.4237,
                'long': 27.1428,
                'location': 'The Green Spoon',
                'accuracy': 10
            },
            {
                'lat': 39.9334,
                'long': 32.8597,
                'location': 'The Cozy Corner',
                'accuracy': 12
            },
            {
                'lat': 37.0621,
                'long': 37.3793,
                'location': 'Midnight & Co.',
                'accuracy': 20
            },
            {
                'lat': 40.1955,
                'long': 29.0600,
                'location': 'Mallow',
                'accuracy': 11
            },
            {
                'lat': 37.8724,
                'long': 32.4922,
                'location': 'Cocoa & Co.',
                'accuracy': 13
            },
            {
                'lat': 36.8969,
                'long': 30.7133,
                'location': 'Rockn Rolla',
                'accuracy': 14
            },
            {
                'lat': 36.8969,
                'long': 30.7133,
                'location': 'Everyday Saturday',
                'accuracy': 14
            },
            {
                'lat': 36.8969,
                'long': 30.7133,
                'location': 'To The Sun And Back',
                'accuracy': 14
            }
        ]
    },

    selectLocation() {
        router.replace({
            uri: 'pages/result/result',
            params:{
                lat1: this.lat1,
                log1: this.log1,
                lat2: this.lat2,
                long2: this.long2
            }
        });
    }
};
