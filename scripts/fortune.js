'use strict' ;

module.exports = robot =>
{
  robot.hear(/fortune/i, msg =>
  {
    const user_id = msg.message.user.id ;
    const fortune_lists = [ 'Coudn\'t be Better', 'Fantastic', 'Great', 'Good', 'Usual Day', 'A little Bad', 'Bad', 'Too Bad', 'Horrible' ] ;
    const todays_fortune = fortune_lists[ Math.floor( Math.random() * fortune_lists.length ) ] ;
    msg.send(`Hi Dear <@${user_id}>, Your fortune of today is \" ${todays_fortune} \". Best regards.`) ;
  }) ;
} ;
