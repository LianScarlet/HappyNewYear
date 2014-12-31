<?php

/*
var now = new Date(),
			gaptime = crossyear-now,
			misec = crossyear-now,

			day = Math.floor(misec/oneday),
			h = misec-(day*oneday),
			hour = Math.floor(h/onehour),
			m = h-(hour*onehour),
			minute = Math.floor(m/oneminute),
			s = m-(minute*oneminute),
			second = Math.floor(s/onesecond);


		timebox.innerHTML= day+" 天 "+ hour + " 小時 "+ minute + " 分 " + second +" 秒 ";

*/

$d1=new DateTime();
$d2=new DateTime("2015-1-1 0:0:0");
$diff=$d2->diff($d1);
//echo "HGE".$diff->d;
//print_r($diff);
echo $diff->d." 天 ".$diff->h." 小時 ".$diff->i." 分 ".$diff->s." 秒 ";

?>