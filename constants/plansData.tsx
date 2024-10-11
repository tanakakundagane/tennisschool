import { FaWalking } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";

export const plansData= [
  {
    icon:<FaWalking/>,
    name:'初級',
    price:'5,000',
    features:[
      '２時間の個別レッスン',
      'コートの無料使用',
      '機材の無料貸し出し',
    ]
  },
  {
    icon:<FaCrown/>,
    name:'上級',
    price:'30,000',
    features:[
      '5時間の個別レッスン',
      '施設内全て無料使用',
      '実績者によるコーチ',
      '地区大会エントリー'
    ]
  },
  {
    icon:<RiTeamFill/>,
    name:'プロ級',
    price:'50,000',
    features:[
      '8時間の個別レッスン',
      '施設内全て無料使用',
      '実績者によるコーチ',
      '世界大会チーム戦に出場'
    ]
  },
]