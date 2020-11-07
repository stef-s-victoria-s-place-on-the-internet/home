#!/bin/bash
urls=(
  "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c1.0.1078.1078a/s640x640/51593928_398640994220590_4113512693657782006_n.jpg?_nc_ht=scontent-ams4-1.cdninstagram.com&_nc_cat=110&_nc_ohc=_dHm-tzMVe0AX8YCEpu&oh=ced48a86340d153a7aac1c6e771ab836&oe=5EFB8097"
  "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/49906689_2213498318912938_3893352958502779600_n.jpg?_nc_ht=scontent-ams4-1.cdninstagram.com&_nc_cat=110&_nc_ohc=8fI6Khrw4cYAX8Jgtag&oh=2b73ce6b629c6ecc6573856791e64451&oe=5EFCD4DF"
  "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/49858119_2313316985564192_4002896575511609861_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=6TM4lbygV8MAX_3ZIJP&oh=47a99a588a95de264bb0a9a9ba1887c4&oe=5EFC8C8C"
  "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/42686463_253388898710525_3363567770255344715_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=105&_nc_ohc=NvkGy1ZR8_AAX_B-Uxn&oh=4d0c43abb1d6fae3dca45448267da039&oe=5EFBFE22"
  "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/42002445_341931476351876_5621942233883866668_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=RsUqC1YI3DYAX-d9V0g&oh=cfc8a3e3cadd9e6d49b2488b2f9c2104&oe=5EFBCA4E"
  "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/e15/s640x640/41977758_247090485998514_881627729118331317_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=106&_nc_ohc=JiH7uMLPclUAX_QepDq&oh=bb541b239b217392320f2f2ae99de46f&oe=5ED4CA54"
  "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/41657848_2131916460152414_446045290286897490_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=102&_nc_ohc=6p8hW7CijCAAX-42xqa&oh=f9ec4214fcc0773eac2888b39daf6045&oe=5EFB2B36"
  "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/41138543_530055194126350_7470692468309726080_n.jpg?_nc_ht=scontent-ams4-1.cdninstagram.com&_nc_cat=110&_nc_ohc=UO3M9BsYNZwAX-BfuhK&oh=21032f5a37a29ea215b2f72c3b498834&oe=5EFC63FA"
  "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/41113449_233103314221792_7327021284612502951_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=e7pJlhpCC88AX900PY7&oh=e1754a4e18ffc954c1b2bcaf3f9be73f&oe=5EFB664D"
  "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/36086298_236258017172164_7624370470061604864_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=c31cD9CSBt0AX-uLnTZ&oh=3f74f2b7d13dcb0bad746aa57f5d0602&oe=5EFAC003"
  "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/36085923_985941874916782_8984377237344092160_n.jpg?_nc_ht=scontent-ams4-1.cdninstagram.com&_nc_cat=110&_nc_ohc=9EFRW8kR264AX-3Pdin&oh=195e0217e3d72b355cb53e1f2f4cf4f9&oe=5EFBFA9E"
  "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/35617473_231178414152779_1792695336188248064_n.jpg?_nc_ht=scontent-ams4-1.cdninstagram.com&_nc_cat=111&_nc_ohc=ysfZMQRJjDoAX_4B5VI&oh=04e00e7a6cd11bf391b387aba4e3567f&oe=5EFB631D"
  "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/e35/30087348_187681562030527_1904321836858998784_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=107&_nc_ohc=o_3CHM0DySAAX9OQJ6q&oh=c0510336434dbf735f4515567f88cb17&oe=5EFB083C"
  "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/30591280_2533305633362246_5070170994136580096_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=102&_nc_ohc=M_0bns6wd68AX_Hb-lB&oh=64aac18927ececa91ea423e552956304&oe=5EFB06EF"
  "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/30086892_221523471952044_1295659644563226624_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=JDGD_fbc_xgAX_d_wc6&oh=b8e62fbea6c8b66a49aeb49caf6ac9ee&oe=5EFA73AB"
  "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/29714522_1647529345346470_4097021521866784768_n.jpg?_nc_ht=scontent-ams4-1.cdninstagram.com&_nc_cat=110&_nc_ohc=KoJY7jTMpnQAX_gs7q6&oh=3a8003a8f45d5f60429535ffc3d26d0b&oe=5EFA9237"
  "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/29095180_120981085413405_6096569900438913024_n.jpg?_nc_ht=scontent-ams4-1.cdninstagram.com&_nc_cat=109&_nc_ohc=o09XsEu8lhAAX9PIFV9&oh=d6df32c04400a723287617e6bd638787&oe=5EFC6A2E"
  "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/29401060_505390959857153_1963941690939015168_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=105&_nc_ohc=I1nNU4YUnYwAX9rbaFT&oh=6dfb7ac55db272594135b630aab98171&oe=5EFA6ECF"
  "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/29087512_2475484079343952_4601274120053719040_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=-HEEed2jBA8AX9QZxVZ&oh=76058bcd2cd64788b2152d9b045688d6&oe=5EFB803B"
  "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c180.0.720.720a/s640x640/26185616_168619560313412_7207459222999531520_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=-Fpv9MPUdSgAX8fxCy0&oh=9aedea6b7b4a3dfe33bb91ccec7bd458&oe=5EFB7A10"
  "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c180.0.720.720a/s640x640/26281672_2039671509601208_6370799396170235904_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=3yT8RaIHdbEAX_xnQbq&oh=31defd3e4346901c63b6938430ad531e&oe=5EFA2E4A"
  "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/25037878_2026215631035318_1604723661527318528_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=106&_nc_ohc=4gVGNg3ne14AX8onhtL&oh=c4a7ee72ef71f2b5031248d6421655c8&oe=5EFB2584"
  "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/25005468_531112413930215_4331601618983190528_n.jpg?_nc_ht=scontent-ams4-1.cdninstagram.com&_nc_cat=111&_nc_ohc=ofSNARn9DxkAX9sb8E1&oh=73a8070a3365fc320c0d9026856fd3ad&oe=5EFBD463"
  "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/24838820_152174065547016_11593207653597184_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=7YruGjNYawsAX8u-9ek&oh=75e1590926a48ae52fe12dc91248a980&oe=5EFBB432"
  "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/e15/24327961_1850743671602508_4130159926154625024_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=2uYyvb8HhZMAX-dJXU1&oh=782d74c428de77281db1c049c37af333&oe=5ED4EA5A"
  "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-15/e15/24124806_187509925134573_4887076233365422080_n.jpg?_nc_ht=scontent-ams4-1.cdninstagram.com&_nc_cat=109&_nc_ohc=Nq2tbC5xVegAX847hCd&oh=6865822b8e00870edd81630a18cbfadb&oe=5ED5173C"
  "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/e15/22710429_323988914743387_6391986718949507072_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=107&_nc_ohc=P7GrutE0C-wAX8DAtkj&oh=f46c3a9adf21d9225768696ba7365f4d&oe=5ED4F329"
  "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-15/e15/s640x640/22581935_1482662415182877_1887787282216255488_n.jpg?_nc_ht=scontent-ams4-1.cdninstagram.com&_nc_cat=109&_nc_ohc=PTR65YDzTDkAX_8RhlR&oh=1d95ae81483cd34ff28ec7eeb8620e43&oe=5ED49059"
)

count=1

for img in ${urls[@]}; do
  echo $img
  curl $img --output ${count}.jpg
  ((count=count+1))
done