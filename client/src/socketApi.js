import io from 'socket.io-client';

let socket;

export const init = () => {
    console.log("Sunucuya bağlanılıyor...")
    //backend hangi portta çalışıyorsa oraya bağlantı sağlıyoruz.
    socket = io('http://localhost:3001', {
        transports: ["websocket"],
    });

    socket.on('connect', () => console.log("Sunucuya bağlantı başarılı!"))
}

export const sendData = (color) => {
    //emit: clientta ise backende, backendde isek clienta data göndermeyi sağlar.
    //emit parametreleri; datanın hangi kanala gideceği ve data
    socket.emit('newColor', color);
}

export const subscribe = (cb) => {
    //kanallar arası renk kodunun iletilmesi için
    socket.on('receive', (color) => {
        //callback fonksiyonu ile color değerinin değişimi takip ediliyor
        cb(color);
    });
}