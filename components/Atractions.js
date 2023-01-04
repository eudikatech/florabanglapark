import Image from "next/image"




export default function Atractions() {
    return (
        <div id="atractions" class="container-fluid mb-5">
            <div className='row'>
                <div className='col-md-12'>
                        <div class="pagetext text-center justify-content-center">
                        <Image class="atleaf1" src="/assets/image/leaf1.svg" width={100} height={100}/>
                        <Image class="atleaf2" src="/assets/image/leaf1.svg" width={100} height={100}/>
                        <h1 className='mb-2 bg-light p-2'>ATTRACTIONS</h1>
                        <p id="atractionTxt" className='text-white text-center'>We’ve designed FloraBangla Flower Park to be a verdant treasure trove of experiences that capture the imagination, thanks to the breathtaking landscaping and a range of experiences you can share with friends and family.</p>
                        </div>
                        <div id="atraction" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators d-none">
                                <button type="button" data-bs-target="#atraction" data-bs-slide-to="0" class="active"></button>
                                <button type="button" data-bs-target="#atraction" data-bs-slide-to="1"></button>
                                <button type="button" data-bs-target="#atraction" data-bs-slide-to="2"></button>
                            </div>
                            <button class="carousel-control-prev conpv" type="button" data-bs-target="#atraction" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                            </button>
                            <button class="carousel-control-next connx" type="button" data-bs-target="#atraction" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                            </button>
                                    <div class="carousel-inner crinner">
                                        <div class="carousel-item cri active">
                                        <div class="row">
                                            <div class="col-sm-3">
                                            
                                                <div class="card">
                                                    <div class="card-body atcard">
                                                    <Image class="atcardimg" src="/assets/image/foodcourt.webp" width={300} height={300}/>
                                                    
                                                    <div class="p-2">
                                                    <h6>Food Court</h6>
                                                    <p>A traditional food court but it has a far better sitting arrangement, tourists who like to enjoy local food at a reasonable price often pick this location</p>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-3 mid">
                                                <div class="card">
                                                    <div class="card-body atcard">
                                                    <Image class="atcardimg" src="/assets/image/flowerbed.webp"  width={300} height={300}/>
                                                    <div class="p-2">
                                                    <h6>Scenic Beauty</h6>
                                                    <p>There is nothing more beautiful than a fresh, blooming flower. The colours are so vibrant and the petals are so soft and pleasing to heart. </p>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-3">
                                                <div class="card">
                                                    <div class="card-body atcard">
                                                    <Image class="atcardimg" src="/assets/image/resort.webp"  width={300} height={300}/>
                                                    <div class="p-2">
                                                    <h6>Resort</h6>
                                                    <p>Every one of us would love to spend our holidays with family or friends at a wonderful lakeshore facing flower park resort. The Resort has a specious air conditioned room.</p>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        
                                        <div class="carousel-item cri">
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <div class="card">
                                                    <div class="card-body atcard">
                                                    <Image class="atcardimg" src="/assets/image/slide-1.webp"  width={300} height={300}/>                                                <div class="p-2">
                                                    <h6>Flower Shop</h6>
                                                    <p>Inhouse flower shop, providing the freshest and most beautiful flowers in town and you can also find variety of unique gifts and home 
                                                        decor item, we have something for everyone.</p>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-3 mid">
                                                <div class="card">
                                                    <div class="card-body atcard">
                                                    <Image class="atcardimg" src="/assets/image/slide-3.webp"  width={300} height={300}/>
                                                    <div class="p-2">
                                                    <h6>Play Ground</h6>
                                                    <p>We are a family-friendly destination that offers endless fun and adventure for kids of all ages and engage kids while also promoting physical and social development.</p>
                                                    </div>
                                                    </div> 
                                                </div>
                                            </div>
                                            <div class="col-sm-3">
                                                <div class="card">
                                                    <div class="card-body atcard">
                                                    <Image class="atcardimg" src="/assets/image/slide-2.webp"  width={300} height={300}/>
                                                    <div class="p-2">
                                                    <h6>Photo Zone</h6>
                                                    <p>Our photo zone for all of your imaging needs, We can't wait to help you create lasting memories!</p>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                            </div>
                       </div>
                                
                </div>
            </div>
        </div>
    )
  }
