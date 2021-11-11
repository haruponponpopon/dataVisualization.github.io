var ShopData=[];
ShopData.push({title:'Unagi Data',
genre_num: 39,
genre: ["うなぎ", "焼鳥", "炭火焼き", "丼もの（その他）", "魚介料理・海鮮料理", "和食（その他）", "居酒屋", "鍋（その他）", "あなご", "デリカテッセン", "寿司", "割烹・小料理", "バー", "弁当", "居酒屋・ダイニングバー（その他）", "懐石・会席料理", "天ぷら", "その他", "牛タン", "創作料理", "定食・食堂", "郷土料理（その他）", "ステーキ", "ハンバーグ", "ラーメン", "餃子", "どじょう", "からあげ", "洋食", "うどん", "天ぷら・揚げ物（その他）", "ビストロ", "カフェ", "ホルモン", "韓国料理", "天丼・天重", "中華粥", "カレーライス", "つけ麺"],
min_date: "2011-09",
max_date: "2021-11",
dist: [
[-1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[-1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[-1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[-1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[-2, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[-3, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[-3, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[-5, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[-3, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[-3, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[-3, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-3, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-3, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-3, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-3, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-5, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-4, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-4, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-4, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-4, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-4, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-4, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-4, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-4, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-4, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-4, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-4, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-4, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-4, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-4, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-4, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-4, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-4, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-4, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-4, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-4, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-4, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-4, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-4, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-4, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-4, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-4, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-2, 1, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-2, 1, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-2, 1, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[-2, 1, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 0, 0, -2, 0, 0, 0, 0, -1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 0, 0, -2, 0, 0, 0, 0, -1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 0, 0, -2, 0, 0, 0, 0, -1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, -1, -1, 0, 0, 0, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 0, 1, -2, 0, 0, 0, 0, -1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 2, 0, -1, -1, 0, 0, 0, 0, 1, 0, -1, 0, 1, 0, 0, 0, 0, 0, 1, -2, 0, 0, 0, 0, -1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 4, 0, -1, -1, 0, 0, 0, 0, 1, 0, -1, 0, 1, 0, 0, 0, 0, 0, 1, -2, 0, 0, 0, 0, -1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 4, 0, -1, -1, 0, 0, 0, 0, 1, 0, -1, 0, 1, 0, 0, 0, 0, 0, 1, -2, 0, 0, 0, 0, -1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 5, 0, -1, -1, 0, 0, 0, 0, 2, 0, -1, 0, 1, 0, 0, 0, 0, 0, 1, -2, 0, 0, 0, 0, -1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[5, 5, 0, -1, -1, 1, 0, 0, 0, 2, 0, -1, 0, 1, 0, 0, 0, 0, 0, 1, -2, 0, 0, 0, 0, -1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[9, 6, 0, -1, -1, 2, 0, 0, 0, 2, 0, -1, 0, 1, 0, 1, 1, 0, 0, 1, -2, 0, 0, 0, 0, -1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[10, 6, 0, -1, -1, 3, 0, 0, 0, 2, 0, -1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, -1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[15, 6, 0, -1, -1, 3, 0, 0, 0, 2, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, -1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[18, 6, 0, -1, -1, 4, 0, 0, 0, 2, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, -1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[18, 6, 0, -1, -1, 4, 0, 0, 0, 2, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, -1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[20, 6, 0, -1, -1, 4, 0, 0, 0, 2, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, -1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[18, 6, 0, -1, -2, 4, 0, 0, 0, 2, -1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, -1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[22, 6, 0, -1, -2, 4, 0, 0, 0, 2, -1, 0, 0, 1, 1, 2, 1, 0, 0, 1, 0, 0, 0, 0, 0, -1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[25, 6, 0, -1, -2, 4, 1, 0, 0, 2, -1, 0, 0, 1, 1, 2, 1, 0, 0, 1, 0, 0, 0, 0, -1, -1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, -1],
[25, 6, 0, -1, -2, 4, 1, 0, 0, 2, -1, 0, 0, 1, 1, 2, 1, 0, 0, 1, 0, 0, 0, 0, -1, -1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, -1],
[25, 6, 0, -1, -2, 4, 1, 0, 0, 2, -1, 0, 0, 1, 1, 2, 1, 0, 0, 1, 0, 0, 0, 0, -1, -1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, -1],
[27, 6, 0, -1, -2, 5, 2, 0, 0, 2, -1, 0, 0, 1, 1, 2, 1, 0, 0, 1, 0, 0, 0, 0, -1, -1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, -1],
[28, 6, 0, -1, -2, 5, 2, 0, 0, 2, -1, 0, 0, 1, 1, 2, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, -1],
[28, 6, 0, -1, -2, 5, 1, 0, 0, 2, -1, 0, 0, 1, 1, 2, 1, 0, 0, 2, -1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, -1],
[32, 6, 0, -1, -2, 5, 3, 0, 0, 2, -1, 0, 0, 1, 1, 2, 1, 0, 0, 2, -1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, -1],
[33, 6, 0, -1, -2, 5, 4, 0, 0, 2, -1, 0, 0, 1, 1, 2, 1, 0, 0, 2, -1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, -1],
[35, 6, 0, -1, -2, 5, 4, 0, 0, 2, -1, 0, 0, 1, 1, 2, 1, 0, 0, 2, -1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, -1],
[35, 7, 0, -1, -2, 5, 4, 0, 0, 3, -1, 0, 0, 1, 1, 2, 1, 0, 0, 2, -1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, -1],
[37, 7, 0, -1, -2, 5, 4, 0, 0, 3, -1, 0, 0, 1, 1, 2, 1, 0, 0, 2, -1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, -1],
[37, 7, 0, -1, -2, 5, 4, 0, 0, 3, -1, 0, 0, 1, 1, 2, 1, 0, 0, 2, -1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, -1],
[41, 7, 0, -1, -2, 5, 4, 0, 0, 3, -1, 0, 0, 1, 1, 2, 1, 0, 0, 2, -1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, -1],
[43, 7, 0, 0, -1, 5, 4, 0, 0, 3, -1, 0, 0, 1, 1, 2, 1, 0, 0, 2, -1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, -1],
[43, 7, 0, 0, -1, 5, 4, 0, 0, 3, -1, 0, 0, 1, 1, 2, 1, 0, 0, 2, -1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, -1],
[45, 12, 0, 0, -1, 5, 4, 0, 0, 3, -1, 0, 0, 3, 1, 2, 1, 0, 0, 2, -1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, -1],
[46, 12, 0, 0, -1, 5, 4, 0, 0, 3, -1, 0, 0, 3, 1, 2, 1, 0, 0, 2, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, -1],
[49, 12, 0, 0, 2, 5, 4, 0, 0, 3, -1, 0, 0, 3, 1, 2, 1, 0, 0, 2, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, -1],
[50, 12, 0, -1, 2, 5, 4, 0, 0, 3, -1, 0, 0, 3, 1, 2, 1, 0, 0, 3, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, -1, -1],
[57, 12, 0, -1, 2, 5, 4, 0, 0, 3, -1, 0, 0, 3, 1, 2, 1, 0, 1, 3, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, -1, -1],
[57, 12, 0, -1, 1, 5, 3, 0, 0, 3, -1, 0, 0, 1, 1, 2, 1, 0, 1, 3, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, -1, -1],
[57, 13, 0, -1, 1, 5, 3, 0, 0, 3, -1, 0, 0, 1, 1, 2, 1, 1, 1, 3, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, -1, -1],
[57, 13, 0, -1, 1, 5, 3, 0, 0, 3, -1, 0, 0, 1, 1, 2, 1, 1, 1, 3, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, -2, -1, -1],
[58, 13, 0, -1, 1, 5, 3, 0, 0, 3, -1, 1, 0, 1, 1, 2, 1, 1, 1, 3, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, -2, -1, -1],
[58, 13, 0, -1, 2, 6, 5, 0, 1, 3, -1, 1, 0, 1, 1, 2, 1, 1, 1, 3, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, 0, 0, -1, -1, -1, -2, -1, -1],
[58, 13, 0, -1, 2, 6, 5, 0, 1, 3, -1, 1, 0, 1, 1, 2, 1, 1, 1, 3, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, 0, 0, -1, -1, -1, -2, -1, -1],
[58, 15, 0, -1, 2, 6, 5, 0, 1, 3, -1, 1, 0, 1, 1, 2, 1, 1, 1, 3, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, 0, 0, -1, -1, -1, -2, -1, -1],
[60, 15, 0, -1, 3, 6, 5, 0, 1, 3, -1, 1, 0, 1, 1, 2, 2, 1, 1, 3, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, 0, 0, -1, -1, -1, -2, -1, -1],
[65, 16, 0, -1, 3, 7, 7, 0, 1, 3, -1, 1, 0, 1, 1, 3, 2, 1, 1, 3, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, 0, 0, -1, -1, -1, -2, -1, -1],
[65, 16, 0, -1, 3, 7, 7, 0, 1, 3, -1, 1, 0, 1, 1, 3, 2, 1, 1, 3, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, 0, 0, -1, -1, -1, -2, -1, -1],
[67, 16, 0, 0, 3, 7, 7, 0, 1, 3, -1, 2, 0, 1, 1, 3, 2, 1, 1, 3, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, 0, 0, -1, -1, -1, -2, -1, -1],
[68, 17, 0, 0, 3, 7, 8, 0, 1, 3, 0, 2, 0, 2, 2, 3, 2, 1, 1, 3, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, 0, 0, -1, -1, -1, -2, -1, -1],
[68, 18, 0, 0, 3, 7, 8, 0, 1, 4, 0, 2, 0, 2, 2, 3, 2, 1, 1, 3, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, 0, 0, -1, -1, -1, -2, -1, -1],
[66, 18, 0, 0, 2, 8, 8, 0, 1, 4, 0, 2, 0, 2, 2, 3, 2, 1, 1, 3, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, 0, 0, -1, -1, -1, -2, -1, -1],
[67, 19, 0, 0, 2, 8, 8, 0, 1, 5, 0, 2, 0, 3, 2, 3, 2, 1, 1, 3, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, 0, 0, -1, -1, -1, -2, -1, -1],
[69, 20, 0, 0, 2, 9, 8, 0, 1, 5, 0, 2, 0, 3, 2, 3, 2, 1, 1, 3, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, 0, 0, -1, -1, -1, -2, -1, -1],
[71, 21, 0, 0, 2, 9, 9, 0, 1, 5, 0, 2, 0, 3, 2, 3, 2, 1, 1, 3, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, 0, 0, -1, -1, -1, -2, -1, -1],
[71, 21, 0, 0, 2, 9, 9, 0, 1, 5, 0, 2, 0, 3, 2, 3, 2, 1, 1, 3, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, 0, 0, -1, -1, -1, -2, -1, -1],
[71, 21, 0, 0, 2, 9, 9, 0, 1, 5, -1, 2, 0, 3, 2, 2, 2, 1, 1, 3, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, 0, 0, -1, -1, -1, -2, -1, -1],
[72, 21, 0, 0, 2, 9, 9, 0, 1, 5, -1, 3, 2, 3, 2, 2, 2, 1, 1, 3, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -2, -1, -1],
[74, 21, 0, 0, 4, 9, 9, 0, 1, 5, -1, 3, 2, 3, 2, 2, 2, 1, 1, 3, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -2, -1, -1],
[76, 21, 0, 0, 4, 9, 9, 0, 1, 6, -1, 4, 2, 3, 2, 2, 2, 1, 1, 3, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -2, -1, -1],
[80, 21, 0, 0, 4, 9, 9, 0, 1, 6, -1, 4, 2, 3, 2, 2, 2, 1, 1, 3, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -2, -1, -1],
[85, 21, 0, 0, 6, 9, 9, 0, 3, 6, -1, 5, 2, 3, 2, 2, 2, 1, 1, 3, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -2, -1, -1],
[87, 23, 0, 0, 6, 9, 9, 1, 5, 6, -1, 6, 2, 3, 2, 2, 2, 1, 1, 3, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -2, -1, -1],
[88, 23, 0, 0, 7, 9, 9, 1, 5, 6, -1, 6, 2, 3, 2, 2, 2, 1, 1, 3, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -2, -1, -1],
[86, 24, 0, 0, 7, 9, 10, 1, 5, 7, 0, 6, 2, 3, 2, 2, 2, 1, 1, 3, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -2, -1, -1],
[93, 24, 0, 0, 7, 11, 10, 1, 5, 7, 0, 6, 2, 3, 2, 2, 2, 1, 1, 2, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -2, -1, -1],
[99, 24, 0, 0, 7, 11, 10, 1, 5, 7, 0, 6, 2, 3, 2, 0, 2, 1, 1, 2, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -2, -1, -1],
[99, 24, 0, 0, 7, 11, 10, 1, 5, 7, 0, 6, 2, 3, 2, 0, 2, 1, 1, 2, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -2, -1, -1],
[101, 24, 0, 0, 7, 11, 10, 1, 5, 7, 0, 6, 2, 3, 2, 0, 2, 1, 1, 2, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -2, -1, -1],
[107, 24, 0, 0, 7, 12, 10, 1, 5, 7, 0, 6, 2, 3, 2, 0, 1, 1, 1, 2, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -2, -1, -1],
[122, 24, 0, 1, 7, 12, 11, 1, 6, 7, 0, 6, 2, 3, 2, 0, 1, 1, 1, 2, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -2, -1, -1],
[131, 24, 0, 1, 7, 12, 11, 2, 6, 7, 0, 6, 2, 3, 2, 0, 1, 1, 1, 2, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -2, -1, -1],
[141, 24, 0, 1, 7, 12, 11, 2, 6, 7, 0, 6, 2, 3, 2, 0, 1, 1, 1, 2, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -2, -1, -1],
[160, 24, 0, 1, 9, 14, 12, 2, 6, 7, 0, 6, 2, 3, 2, 0, 1, 1, 1, 2, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -2, -1, -1],
[165, 24, 0, 2, 9, 14, 12, 2, 6, 7, 0, 6, 2, 3, 2, 0, 1, 1, 1, 2, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -2, -1, -1],
[175, 27, 1, 2, 9, 14, 12, 2, 6, 7, 0, 6, 2, 3, 2, 0, 1, 1, 1, 2, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -2, -1, -1],
[191, 27, 1, 2, 9, 14, 12, 2, 6, 7, 0, 6, 2, 3, 2, 0, 1, 1, 1, 2, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -2, -1, -1],
[201, 35, 1, 2, 9, 14, 12, 2, 6, 7, 0, 6, 2, 3, 2, 0, 1, 1, 1, 2, 0, 1, 0, 0, -2, 0, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -2, -1, -1]
]});
