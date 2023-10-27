class Component {
    static list = [];
  
    static init(cars) {  this.list = cars.map((i) => new this(i));
    }
  
    constructor(props) {
        if(this.constructor === Component) {
            throw new Error("Cannot instantiate from Abstract Class")
        }
        let { id, plate, manufacture, model, image, rentPerDay, capacity, description, transmission, available, type, year, options, specs, availableAt} = props;

        this.id = id;
        this.plate = plate;
        this.manufacture = manufacture;
        this.model = model;
        this.image = image;
        this.rentPerDay = rentPerDay;
        this.capacity = capacity;
        this.description = description;
        this.transmission = transmission;
        this.available = available;
        this.type = type;
        this.year = year;
        this.options = options;
        this.specs = specs;
        this.availableAt = availableAt;
    }
  
    render() {
      return `
        <div class="col-12 col-md-6 col-xl-4 my-1" id="${this.id}">
            <div class="card">
                <div class="card-body">
                <img src="${this.image}" class="card-img" alt="Car Image" height="222px">
                <h1 class="fs-6 fw-normal my-3">${this.model}/${this.type}</h1>
                <h2 class="card-title fs-5 fw-bolder">Rp ${this.rentPerDay.toLocaleString('id-ID')} / hari</h2>
                <p class="card-text">Front/rear side curtain airbags. Front & rear side curtain airbags. Body color front license plate brow. Rear body-color spoiler.</p>
                <ul id="carDescription-nav">
                    <li class="list-group-item d-flex justify-content-star align-items-center">
                        <span class="badge"><i class="fa-solid fa-user-group"></i></span> ${this.capacity} Orang
                    </li>
                        <li class="list-group-item d-flex justify-content-star align-items-center">
                        <span class="badge"><i class="fa-solid fa-gear"></i></span> ${this.transmission}
                    </li>
                    <li class="list-group-item d-flex justify-content-star align-items-center">
                        <span class="badge"><i class="fa-regular fa-calendar"></i></span> Tahun ${this.year}
                    </li>
                </ul>
                <button type="button" id="btn-chooseCar" class="btn">Pilih Mobil</button>
                </div>
            </div>
        </div>
      `;
    }
}

class CarList extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return super.render();
    }
    
    init(){
        return super.init();
    }
}
  