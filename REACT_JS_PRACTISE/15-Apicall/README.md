API related do methods hoti he fetch and axios.
API calling me fetch inbuilt method hoti  he javascript me banu hui hoti he web api ke through miljati he hume but axios ak 3rd party api hoti 

promise ky hoti he mann lo apn ne kisi data ko call lagaya to ab vo process asyncronous chalri he to vo turant data ni layega usko data lane me thoda time lagta he {promise asyncronous work kerti he} (javascript default syncronous he but API ko call kerte time asyncronous work kerti he)

syntax :

async function getData()
{
    const response = await fetch('API link'); // await means jab tak ye api call ni hojati wait kero 
    ab ye async ky he means hum ne phele hi declare ker diya he ki ye function asyncronous hone vala he async ke bina await kam ni kerega ok 
}

why we use axios 
axios thora errors ko jiyada ache se manage kerta he intersepters hote he loading ko easily manger ker sackta he 3rd party library he setup kafi easy he