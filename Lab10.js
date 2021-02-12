use ReStore
db.items.insertOne({
	"category" : "Phone",
	"model" : "iPhone 6",
	"producer" : "Apple",
	"OS": "iOS",
	"price" : 600
})
db.items.insertMany( [
    	{"category" : "Smart Watch", "model" : "Mi Smart Band 4 NFC Black", "producer" : "Xiaomi","price" : 1299, "diagonal" : 0.95, "interfaces" : ["Bluetooth 5", "NFC"], "supportedOS" : ["Android", "iOS"] ,"displaytype": "colour", weight: { value:22.1, uom:"g"}},
    	{"category" : "Smart Watch", "model" : "Mi Band 3 Black", "producer" : "Xiaomi","price" : 499, "diagonal" : 0.78, "interfaces" : "Bluetooth 4.2" ,"supportedOS" : ["Android", "iOS"], "displaytype": "monochrome", "weight": { value:20, uom:"g"}, "matrix": "OLED"},
    	{"category" : "Smart Watch", "model" : "Apple Watch SE 44 mm", "producer" : "Apple","price" : 11399, "diagonal" : 0.78, "interfaces" : ["Bluetooth 5", "NFC", "Wi-Fi"], "OS": "WatchOS","supportedOS" : "iOS", "weight": {value:36.2, uom:"g"}, "matrix": "LTPO"},
    	{"category" : "Phone", "model" : "iPhone SE (2020)", "producer" : "Apple", "OS": "iOS", "diagonal" : 4.7, Memory:{value:64, uom:"Gb"}, "interfaces" : ["Bluetooth 5", "NFC", "Wi-Fi"], "Fingeprint": "Yes","matrix": "IPS","weight": {value:148, uom:"g"}, "price" : 14999},
    	{"category" : "Phone", "model" : "Galaxy M51", "producer" : "Samsung","OS": "Android", "diagonal" : 6.7, RAM: {value:6, uom:"Gb"}, Memory:{value:128, uom:"Gb"}, "interfaces" : ["Bluetooth 5", "NFC", "Wi-Fi"], "Fingeprint": "Yes","matrix": "Super AMOLED Plus","weight": {value:213, uom:"g"}, "price" : 8999},
    	{"category" : "Phone", "model" : "P40 lite", "producer" : "Huawei", "OS": "Android", "diagonal" : 6.4, RAM: {value:6, uom:"Gb"}, Memory:{value:128, uom:"Gb"}, "interfaces" : ["Bluetooth 5", "NFC", "Wi-Fi"], "Fingeprint": "Yes","matrix": "LCD","weight": {value:183, uom:"g"}, "price" : 7499},
    	{"category" : "Phone", "model" : "Redmi Note 9 Pro", "producer" : "Xiaomi","OS": "Android", "diagonal" : 6.67, RAM: {value:6, uom:"Gb"}, Memory:{value:128, uom:"Gb"}, "interfaces" : ["Bluetooth 5", "NFC", "IRDA", "Wi-Fi"], "Fingeprint": "Yes","matrix": "IPS","weight": {value:209, uom:"g"}, "price" : 6999},
    	{"category" : "Phone", "model" : "Redmi Note 9", "producer" : "Xiaomi","OS": "Android", "diagonal" : 6.53, RAM: {value:4, uom:"Gb"}, Memory:{value:128, uom:"Gb"}, "interfaces" : ["Bluetooth 5", "NFC", "IRDA", "Wi-Fi"], "Fingeprint": "Yes","matrix": "IPS","weight": {value:199, uom:"g"}, "price" : 5399},
    	{"category" : "TV", "model" : "UE50NU7002UXUA", "producer" : "Samsung","Smart":"Yes", "diagonal" : 50, "Resolution": {v1:3840, v2:2160}, "weight": { "full":9.5, "clear":9.4, uom:"kg"}, "price" : 11999},
    	{"category" : "TV", "model" : "UE24H4070AUXUA", "producer" : "Samsung","Smart":"No", "diagonal" : 24, "Resolution": {v1:1366, v2:768}, "weight": { "full":4.1, "clear":3.9, uom:"kg"}, "price" : 3499},
    	{"category" : "TV", "model" : "L43M5-5ARU", "producer" : "Xiaomi", "Smart":"Yes", "diagonal" : 43, "Resolution": {v1:3840, v2:2160}, "weight": { "full":7.26, "clear":7.2, uom:"kg"}, "price" : 8699},
    	{"category" : "TV", "model" : "55UN71006LB", "producer" : "LG", "Smart":"Yes", "diagonal" : 55, "Resolution": {v1:3840, v2:2160}, "weight": { "full":13.9, "clear":13.7, uom:"kg"}, "price" : 15999}
   ] );
   