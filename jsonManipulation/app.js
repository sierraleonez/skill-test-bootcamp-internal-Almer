
const json = [
    {
      "inventory_id": 9382,
      "name": "Brown Chair",
      "type": "furniture",
      "tags": [
        "chair",
        "furniture",
        "brown"
      ],
      "purchased_at": 1579190471,
      "placement": {
        "room_id": 3,
        "name": "Meeting Room"
      }
    },
    {
      "inventory_id": 9380,
      "name": "Big Desk",
      "type": "furniture",
      "tags": [
        "desk",
        "furniture",
        "brown"
      ],
      "purchased_at": 1579190642,
      "placement": {
        "room_id": 3,
        "name": "Meeting Room"
      }
    },
    {
      "inventory_id": 2932,
      "name": "LG Monitor 50 inch",
      "type": "electronic",
      "tags": [
        "monitor"
      ],
      "purchased_at": 1579017842,
      "placement": {
        "room_id": 3,
        "name": "Lavender"
      }
    },
    {
      "inventory_id": 232,
      "name": "Sharp Pendingin Ruangan 2PK",
      "type": "electronic",
      "tags": [
        "ac"
      ],
      "purchased_at": 1578931442,
      "placement": {
        "room_id": 5,
        "name": "Dhanapala"
      }
    },
    {
      "inventory_id": 9382,
      "name": "Alat Makan",
      "type": "tableware",
      "tags": [
        "spoon",
        "fork",
        "tableware"
      ],
      "purchased_at": 1578672242,
      "placement": {
        "room_id": 10,
        "name": "Rajawali"
      } 
    }
  ]


function app(){
    let meetingRoomItem = []
    let electronicDevice = []
    let furniture = []
    let jan_16 = []
    let brownItem = []
    let jan_16_date
    for(let i = 0 ; i < json.length;i++){
        json[i].placement.name == "Meeting Room" && meetingRoomItem.push(json[i])
        json[i].type == "electronic" && electronicDevice.push(json[i])
        json[i].tags.includes("furniture") && furniture.push(json[i])
        json[i].tags.includes("brown") && brownItem.push(json[i])
        jan_16_date = (new Date(json[i].purchased_at) ).toLocaleDateString()
        jan_16_date == "1/16/2020" && jan_16.push(json[i])
        console.log("===== Meeting Room =====")
        console.log(meetingRoomItem)
        console.log("===== Electronic Device =====")
        console.log(electronicDevice)
        console.log("===== Furniture =====")
        console.log(furniture)
        console.log("===== Brown Item =====")
        console.log(brownItem)
        console.log("===== Jan 16 =====")
        console.log(jan_16)
    }
}
app()