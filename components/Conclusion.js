export default function Conclusion(conclusion){
    return `
    <section class="sectionc container">
                <div class="whitebg">
                    <h1 class="cheader text" id="${conclusion.id}">${conclusion.title}</h1>
                    <div class="row">
                        <div class="cpic col-6">
                            <img class="concpic" src="${conclusion.photo}" alt="Picture">
                        </div>
                        <div class="concpara col-5">
                            <p class="smalltext">
                            ${conclusion.content}
                        </div>
                    </div>
                </div>
            </section>
    `}
    