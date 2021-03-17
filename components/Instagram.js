export default function Instagram(instagram){
    return `
    <section class="sectionig container"> 
                <div class="row whitebg">
                    <div class="igpic col-6">
                        <br><br><img class="instapic" src="${instagram.photo}" alt="Instagram">
                    </div>
                    <div class="igpara col-6">
                        <h1 class="igheader text" id="${instagram.id}">${instagram.title}</h1>
                        <p class="smalltext">
                            ${instagram.content}
                        </p>
                        <br>
                    </div> 
                </div>
            </section>`
}