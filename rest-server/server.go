package main

import (
	"flag"
	"log"
	"net/http"
)

func main() {
	port := flag.String("p", "3000", "port")
	dir := flag.String("d", "./public", "dir")
	flag.Parse()

	http.Handle("/", http.FileServer(http.Dir(*dir)))
	log.Printf("Listening on :%s 🚀", *port)

	err := http.ListenAndServe(":"+*port, nil)
	if err != nil {
		log.Fatalf(err.Error())
	}
}
