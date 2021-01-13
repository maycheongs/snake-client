const IP = '135.23.222.131';
const PORT = 50542;
const controls = {
w: "Move: up",
s: "Move: down",
a: "Move: left",
d: "Move: right",
'1': "Say: I got this!",
'2': "Say: halp",
'3': "Say: (ᵔᴥᵔ)",
b: "Say: byebye" 
}

module.exports = {
  IP, PORT, controls
};


//key inputs can be mapped into an object to return relevant key values "Say: ___" or "Move: --" instead of if functions