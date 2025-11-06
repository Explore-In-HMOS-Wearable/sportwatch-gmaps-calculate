import file from '@system.file';

export function getPlaylist(path) {
    let accumulate = '';
    let finished = false;
    let idx = 0;
    while (!finished) {
        file.readText({
            uri: path,
            length: 4000,
            position: 4000 * idx,
            success: (x) => {
                idx++;
                accumulate = accumulate + x.text;
                if (x.text.length < 4000) {
                    finished = true;
                }
            },
            fail: (data, err) => {
                return accumulate;
            },
        })

    }
    return accumulate;
}