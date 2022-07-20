
const packages = [{
        heavy: true,
        priority: false,
        fragile: false,
        to: 'Harrington',
        trackingNumber: '1324kjs',
        id: 'harkjs',
        missing: false
    },
    {
        heavy: false,
        priority: true,
        fragile: true,
        to: 'Mark',
        trackingNumber: '1325sdk',
        id: 'marsdk',
        missing: false
    },
    {
        heavy: true,
        priority: false,
        fragile: true,
        to: 'Mick',
        trackingNumber: 'jffd147',
        id: 'mic147',
        missing: false
    },
    {
        heavy: false,
        priority: false,
        fragile: false,
        to: 'Jake',
        trackingNumber: 'acdc145',
        id: 'jak145',
        missing: false
    },
    {
        heavy: true,
        priority: true,
        fragile: true,
        to: 'Brittany',
        trackingNumber: '375hf7',
        id: 'brihf7',
        missing: false
    },
    {
        heavy: false,
        priority: true,
        fragile: false,
        to: 'Zach',
        trackingNumber: '8081baz',
        id: 'zacbaz',
        missing: false
    },
    {
        heavy: true,
        priority: false,
        fragile: true,
        to: 'Jeremy',
        trackingNumber: 'suz2367',
        id: 'jer367',
        missing: false
    }
]

let currentPackages = packages

function drawPackages() {
  let template = ''
  currentPackages.forEach(p => template += `      <div class="col-3">
        <div class="rounded shadow dark-bg m-3">
          <img class="img-fluid p-3 selectable" onclick="guessPackage('${p.trackingNumber}')"
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/be/faac10692e11e682607fc440bea011/Gnome-emblem-package.svg.png?auto=format%2Ccompress&dpr=1"
            alt="">
          <p class="text-center pb-3">
            <button class="btn btn-dark text-light" type="button" data-bs-toggle="collapse"
              data-bs-target="#${p.id}" aria-expanded="false" aria-controls="collapseExample">
              Package Label
            </button>
          </p>
          <div class="collapse px-3 pb-2" id="${p.id}">
            <ul class="card card-body list-unstyled">
              <li><b>To:</b> ${p.to}</li>
              <li><b>Priority:</b> ${p.priority}</li>
              <li><b>Heavy:</b> ${p.heavy}</li>
              <li><b>Fragile:</b> ${p.fragile}</li>
              <li><b>Tracking:</b> ${p.trackingNumber}</li>
            </ul>
          </div>
        </div>
      </div>`);
  let packageElm = document.getElementById('packages')
  // @ts-ignore
  packageElm.innerHTML = template
  // console.log(template);
}

function lostPackage() {
  let randomPackage = packages[Math.floor(Math.random() * packages.length)]
  console.log('random', randomPackage);
  randomPackage.missing = true
}

function guessPackage(trackingNumber) {
  let guess = currentPackages.find(p => p.trackingNumber == trackingNumber)
  console.log('guess', trackingNumber, guess);
  // @ts-ignore
  if (guess.missing == true) {
    window.alert('PACKAGE MISSING-Now what?')
  } else { 
    window.alert('This package is accounted for.')
  }
}

// testing start

function getNameInputValue() {
  // @ts-ignore
  let inputVal = document.getElementById('myNameInput').value;
  let foundPackage = currentPackages.find(p => p.to == inputVal);
  console.log(foundPackage);

  drawPackages()

}
 
function getTrackInputValue() {
  // @ts-ignore
  let inputVal = document.getElementById('myTrackInput').value;
  let foundPackage = currentPackages.find(p => p.trackingNumber == inputVal);
  console.log(foundPackage);
 }

// testing end

function filterHeavy() {
  currentPackages = currentPackages.filter(p => p.heavy)
  drawPackages()
}

function filterPriority() {
  currentPackages = currentPackages.filter(p => p.priority)
  drawPackages()
}

function filterFragile() {
  currentPackages = currentPackages.filter(p => p.fragile)
  drawPackages()
}

function resetPackages() {
  currentPackages = packages
  drawPackages()
}

drawPackages()
lostPackage()