export default function IGlist(igitems){
    //parameters = comparecontrast[0].items
    return igitems.map(item=> `
    <div class=smalltext>${item}</div>
    `).join('');
}

export function IGfilter(igitems){
    document.querySelector('.search input[name="comparecontrast').addEventListener('input', (event)=>{
    console.log(event.target.value);
    const keyword = event.target.value;
    const igfiltered = igitems.filter(d=>{
        return d.toLowerCase().includes(keyword.toLowerCase());
    })
    console.log(igfiltered);
    document.querySelector('.iglist').innerHTML = IGlist(igfiltered);

})
}