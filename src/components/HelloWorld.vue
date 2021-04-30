<template>
  <div class="hello">
    <div v-show="clicked">
    <div>
      <label>Nama Resto</label>
    <input v-model="resto" placeholder="nama resto">
    </div>
    <div>
      <label>Tanggal</label>
    <input v-model="date" type="datetime-local" placeholder="nama resto">
    </div>
    <div>
      <label>Nama Kasir</label>
    <input v-model="cashier" placeholder="Nama Kasir">
    </div>
    <div>
      <label>New Item</label>
    <input  v-model="itemName" placeholder="Input New Item Name">
    <input  v-model="itemPrice" placeholder="Input New Item Price">
    <button @click="clickAction">Add</button>
    </div>
    <div>
      <div>
        <button @click="createOrder">Create Order</button>
      </div>
    <div id="listItem" v-for="name in listItem" :key="name">
      <p id="itemName">{{name.name}}</p>
      <p id="itemPrice" >Rp{{numberWithCommas(name.price)}}</p></div>

      
    </div>
  </div>
  <div v-show="!clicked">
    <p >{{resto}}</p>
    <p>Tanggal : {{date}}</p>
    <p>Nama Kasir : {{cashier}}</p>
    <p>==============================</p>
    <p v-for="item in listPrint" :key="item">{{item}}</p>
    <button @click="clickAgain">Create Another Order</button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
data(){
  return{
    numberWithCommas:function (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
},
  resto:"Resto",
  itemName:"",
  itemPrice:0,
  clicked:true,
  listItem:[{name : "Item Name", "price":"item Price"}],
  cashier:"Kasir Keren",
  listPrint :[],
  clickAction: function(){
    this.listItem.push({"name":this.itemName,"price":  this.itemPrice})
    this.itemName = ""
    this.itemPrice = 0
  },
  date:new Date(),
  clickAgain:function(){
    this.clicked ? this.clicked = false : this.clicked = true
    this.resto = ""
    this.cashier = ""
    this.date = new Date()
    this.listPrint = []
  },
  createOrder: function(){
    let item = this.listItem
    let point = "."
    let totalPrice = 0
      let totalString = "TOTAL"
    for(let i = 1 ; i < item.length;i++){
      this.listPrint.push(`${item[i].name}${ point.repeat(30 - (item[i].name.length + item[i].price.length))}Rp${this.numberWithCommas(item[i].price)}`)
    }
    for(let i = 1 ; i < item.length;i++){
      totalPrice+=parseInt(item[i].price)
    }
      this.listPrint.push(`${totalString}${point.repeat(30 - ( totalString.length + totalPrice.length))}Rp${(this.numberWithCommas(totalPrice))}`)
    !this.clicked ? this.clicked = true : this.clicked = false
    console.log(this.clicked)
  }
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#listItem{
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction:row;
}

#itemName{
  flex:1;  
 
}

#itemPrice{
  flex:1
}
</style>
