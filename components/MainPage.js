import Navbar from './Navbar.js';
import Instagram from './Instagram.js' 
import Snapchat from './Snapchat.js'
import CandC from './CandC.js'
//import CandC, {CandCFilter} from './CandC.js'
import Conclusion from './Conclusion.js'
import { IGfilter } from './IGlist.js';
import { SCfilter } from './SClist.js';

export default function MainPage(data){
    document.querySelector('.container').innerHTML = `
        <h1 class="mainheader text"> Product Analysis:</h1>
        <h3 class="subheader text"> Social Networking Giants, Instagram and Snapchat Compete as Image Sharing and Visual Content Services</h3>
        ${Navbar(Object.keys(data))}
        ${Instagram(data.instagram)}
        ${Snapchat(data.snapchat)}
        ${CandC(data.comparecontrast)}
        ${Conclusion(data.conclusion)}
    `;
    IGfilter(data.comparecontrast[0].items);
    SCfilter(data.comparecontrast[1].items);

}
