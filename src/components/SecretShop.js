import React, { useEffect, useState } from 'react'
import demonEdge from "../images/Demon_Edge.png";
import eaglesong from "../images/Eaglesong.png";
import energyBooster from "../images/Energy_Booster.png";
import hyperstone from "../images/Hyperstone.png";
import mysticStaff from "../images/Mystic_Staff.png";
import platemail from "../images/Platemail.png";
import pointBooster from "../images/Point_Booster.png";
import reaver from "../images/Reaver.png";
import sacredRelic from "../images/Sacred_Relic.png";
import talismanEvasion from "../images/Talisman_of_Evasion.png";
import ultimateOrb from "../images/Ultimate_Orb.png";
import vitalityBooster from "../images/Vitality_Booster.png";
import voidStone from "../images/Void_Stone.png";
import ringHealth from "../images/Ring_of_Health.png";
import cornucopia from "../images/Cornucopia.png";
import goldIcon from "../images/Gold.png";

const SecretShop = () => {

    const items = [
        {name: "Demon Edge", image: demonEdge, status: "+40 Attack Damage", cost: 2200},
        {name: "Eaglesong", image: eaglesong, status: "+25 Agility", cost: 2800},
        {name: "Energy Booster", image: energyBooster, status: "+250 Mana", cost: 800},
        {name: "Hyperstone", image: hyperstone, status: "+60 Attack Speed", cost: 2000},
        {name: "Mystic Staff", image: mysticStaff, status: "+25 Intelligence", cost: 2800},
        {name: "Platemail", image: platemail, status: "+10 Armor", cost: 1400},
        {name: "Point Booster", image: pointBooster, status: "+175 Health, +175 Mana", cost: 1200},
        {name: "Reaver", image: reaver, status: "+25 Strength", cost: 2800},
        {name: "Sacred Relic", image: sacredRelic, status: "+55 Attack Damage", cost: 3400},
        {name: "Talisman of Evasion", image: talismanEvasion, status: "+15% evasion", cost: 1300},
        {name: "Ultimate Orb", image: ultimateOrb, status: "+10 Strength, +10 Agility, +10 Intelligence", cost: 2050},
        {name: "Vitality Booster", image: vitalityBooster, status: "+250 Health", cost: 1000},
        {name: "Void Stone", image: voidStone, status: "+1.75 Mana Regeneration", cost: 700},
        {name: "Ring of Health", image: ringHealth, status: "+4.5 Health Regeneration", cost: 700},
        {name: "Cornucopia", image: cornucopia, status: "+5 Health Regeneration \n +2 Mana Regeneration \n +7 Attack Damage", cost: 1200}
    ];

    const [isHovering, setHover] = useState(false);

    const handleMouseOver = () => {
        setHover(true);
    }

    const handleMouseOut = () => {
        setHover(false);
    }

    const shopItem = items.map((item, index) => {
        return (
            <li className='shop-item' key={index} onMouseOver = {handleMouseOver} onMouseOut = {handleMouseOut} >
                <div className='item-name'>{item.name}</div>
                <img src={item.image}/>
                <div className='cost'>{item.cost}<img src={goldIcon} /></div>
                {isHovering===true && (
                <div className='item-status'>{item.status}</div>
                )}
            </li>
        )
    })

  return (
    <div className='secretShop'>
        <ul className='shop-list'>{shopItem}</ul>
    </div>
  )
}

export default SecretShop