export default {
    data: {
        distance: '120 km',
        title: '',
        lat1: 0,
        log1: 0,
        lat2: 0,
        log2: 0
    },

    haversineDistance(
        lat1,
        log1,
        lat2,
        log2) {
        const R = 6371;
        const dLat = toRadianss(lat2 - lat1);
        const dLon = toRadianss(log2 - log1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadianss(lat1)) * Math.cos(toRadianss(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        this.distance = R * c;
    }
}

function toRadianss(degrees) {
    return degrees * (Math.PI / 180);
}
