'use strict';
module.exports = (robot) => {
    robot.hear(/!buki/i, (msg) => {
        const username = msg.message.user.name;
        const weapons = [
            'シューター',
            'ローラー',
            'チャージャー',
            'ブラスター',
            'スロッシャー',
            'スピナー',
            'フデ',
            'シェルター',
            'マニューバー',
            '好きなブキ'
        ];
        const weapon = weapons[Math.floor(Math.random() * weapons.length)];
        msg.send(`<@${username}>は${weapon}を持つでし！`);
    });
};

// ユーザーへメンションが付くようにするには<@ >

//  `(バッククオート) で文字列を囲むと、 ${プログラム内の値} という形式で変数の値を埋め込める。
// (Template Literal という機能。)

// 要は (<@user_id> + ' は ' + weapon + 'を持つでし') と同じ。