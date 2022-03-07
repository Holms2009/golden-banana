import guildBanner from '../assets/images/guild.png';
import goldPiggyBank from '../assets/images/piggy_bank_gold.png';
import houseIcon from '../assets/images/city.png';

const mainMenu: MenuItem[] = [
  { text: 'Главная', image: guildBanner, link: '/' },
  { text: 'Вклады', image: goldPiggyBank, link: '/contributions' },
  { text: 'Здания', image: houseIcon, link: '/buildings' },
  { text: 'Галерея', image: houseIcon, link: '/gallery' }
]

export default mainMenu;