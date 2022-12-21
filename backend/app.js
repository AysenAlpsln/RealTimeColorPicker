const app = require("express")();
const http = require("http").createServer(app);
//real time işleri yapmayı sağlayan bir kütüphane
const io = require("socket.io")(http);
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
	res.send("hello");
});

//default color
let lastColor = "#282c34";

io.on("connection", (socket) => {
	console.log("bir kullanıcı bağlandı!");

    //kullanıcı bağlandığında hali hazırda bir renk varda bunu tüm kullanıcılara iletir.
	socket.emit("receive", lastColor);

    //yeni renk seçildiğinde bunu algılar.
	socket.on("newColor", (color) => {
		console.log(color);

		lastColor = color;
        //ve tüm kullanıcılara bu rengi gönderir.
		io.emit("receive", color);
	});

	socket.on("disconnect", () => {
		console.log("Bir kullanıcı ayrıldı.");
	});
});

http.listen(3001, () => console.log("Server is up 🚀 🚀"));