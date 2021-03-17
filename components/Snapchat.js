export default function Snapchat(snapchat){
    return `
    <section class="sectionsc container">
                <div class="row scbg">
                    <div class="scpara col-6">
                        <h1 class="scheader text" id="${snapchat.id}">${snapchat.title}</h1>
                        <p class="smalltext">
                            ${snapchat.content}
                        </p>
                        <br>
                    </div> 
                    <div class="scpic col-6">
                        <img class="snappic" src="${snapchat.photo}" alt="Snapchat">
                    </div>
                </div>
            </section>
    `}
