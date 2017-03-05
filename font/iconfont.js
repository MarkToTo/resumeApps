;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-wo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M521.424138 91.275843c-238.699474 0-432.193373 193.46013-432.193373 432.193373 0 238.669798 193.493899 432.193373 432.193373 432.193373 238.70152 0 432.193373-193.522552 432.193373-432.193373C953.616488 284.735973 760.124635 91.275843 521.424138 91.275843zM804.83186 805.938566c-36.656875-83.381036-109.390409-147.099243-198.603267-171.298388 54.397934-29.951149 91.273796-87.787392 91.273796-154.286945 0-97.262184-78.831416-176.078251-176.078251-176.078251-97.244788 0-176.078251 78.816067-176.078251 176.078251 0 68.000743 38.626739 126.901225 95.105055 156.229181-88.571245 26.260084-160.149467 91.726098-194.836477 176.360683C169.142793 740.065276 121.2449 637.456317 121.2449 523.468193c0-221.035162 179.160449-400.178215 400.178215-400.178215 221.020836 0 400.178215 179.143053 400.178215 400.178215C921.602354 633.736599 876.973924 733.562165 804.83186 805.938566z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-name" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M832 211.2 198.4 211.2c-44.8 0-76.8 32-76.8 76.8l0 441.6c0 44.8 32 76.8 76.8 76.8L832 806.4c44.8 0 76.8-32 76.8-76.8L908.8 288C908.8 249.6 870.4 211.2 832 211.2zM851.2 729.6c0 12.8-12.8 25.6-25.6 25.6L198.4 755.2c-12.8 0-25.6-12.8-25.6-25.6L172.8 288c0-12.8 12.8-25.6 25.6-25.6L832 262.4c12.8 0 25.6 12.8 25.6 25.6L857.6 729.6z"  ></path>' +
    '' +
    '<path d="M768 339.2l-128 0c-12.8 0-25.6 12.8-25.6 25.6l0 128c0 12.8 12.8 25.6 25.6 25.6l128 0c12.8 0 25.6-12.8 25.6-25.6l0-128C793.6 352 787.2 339.2 768 339.2zM742.4 467.2l-70.4 0L672 396.8l70.4 0L742.4 467.2z"  ></path>' +
    '' +
    '<path d="M544 576l-256 0C268.8 576 256 582.4 256 601.6s12.8 25.6 25.6 25.6l256 0c12.8 0 25.6-12.8 25.6-25.6S556.8 576 544 576z"  ></path>' +
    '' +
    '<path d="M544 672l-256 0c-12.8 0-25.6 12.8-25.6 25.6s12.8 25.6 25.6 25.6l256 0c12.8 0 25.6-12.8 25.6-25.6S556.8 672 544 672z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiaoyu" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M1010.34112 326.4 524.96512 152.384c-4.672-1.664-9.792-1.664-14.528 0L29.41312 324.288C21.47712 327.104 16.10112 334.336 15.71712 342.528 15.33312 350.656 19.94112 358.4 27.55712 361.984l96.896 45.632C95.58912 442.624 91.55712 504.832 91.23712 532.096c-22.208 14.976-28.096 32-28.864 44.416-1.664 25.344 16.896 46.656 29.44 57.856-19.456 97.728-84.544 158.976-85.12 159.616-4.672 4.352-7.104 10.496-6.464 16.768 0.576 6.144 4.096 12.032 9.536 15.36l68.992 43.52c3.456 2.112 7.36 3.264 11.392 3.264 2.432 0 4.864-0.384 7.168-1.152 104.832-37.248 87.872-207.424 81.792-250.368C192.86912 603.904 198.62912 586.24 196.13312 568.768 193.95712 552.64 185.06112 541.056 177.95712 534.08 155.17312 378.688 286.30912 459.712 271.01312 454.144l239.296 87.488c4.8 1.6 9.984 1.6 14.72 0l485.504-176.704C1018.85312 361.984 1024.22912 354.24 1024.10112 345.664 1024.10112 337.024 1018.59712 329.408 1010.34112 326.4L1010.34112 326.4zM145.44512 560.832c0.128 0.064 8.128 5.504 9.216 13.76C155.68512 583.872 148.00512 594.496 141.22112 601.6 136.99712 606.4 135.07712 612.608 136.16512 619.008c8.64 48.768 16.32 177.024-44.224 210.24l-38.592-24.384c25.024-29.12 68.672-90.56 82.048-175.488C136.54912 621.824 133.22112 614.08 126.75712 609.6c-7.936-5.504-23.104-20.48-22.464-30.4 0.448-7.424 11.392-14.208 17.984-17.472C129.38112 558.08 133.60512 550.656 133.41312 542.848 131.81312 499.072 142.43712 431.616 169.95712 424.512 151.46112 448.448 134.75712 486.08 135.90912 544 136.10112 550.592 139.81312 557.056 145.44512 560.832L145.44512 560.832zM517.66912 500.48 90.46912 346.176l427.2-152.64 425.024 152.32L517.66912 500.48 517.66912 500.48zM824.99712 454.592 528.80512 552.448 228.13312 454.528c-6.336-2.048-13.44-1.024-18.944 2.816-5.44 3.904-8.704 10.048-8.704 16.64l0 65.152c0 7.104 3.712 13.696 9.792 17.408 11.904 7.424 18.688 16 20.8 26.304 3.712 18.432-8.256 39.936-13.248 46.464-6.08 8.192-5.248 19.52 2.112 26.624 75.84 74.304 204.864 89.92 299.904 89.92 67.328 0 117.056-7.744 120.064-8.256 188.992-37.696 210.112-96 212.48-107.328 0.128-1.344 0.384-2.752 0.384-4.096L852.77312 473.984c0-6.592-3.264-12.8-8.896-16.64C838.37312 453.504 831.46112 452.416 824.99712 454.592L824.99712 454.592zM810.72512 622.208 810.72512 622.208c-4.864 8.064-34.88 46.4-178.24 75.136-1.152 0.128-251.456 38.336-370.88-59.84 7.488-14.656 15.616-37.632 10.816-62.08C268.90112 557.312 258.66112 541.312 242.59712 528.704l0-26.24 279.68 91.008c4.224 1.536 8.96 1.536 13.312 0l275.136-90.752L810.72512 622.208 810.72512 622.208zM810.72512 622.208"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gongju" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M935.816533 825.668267 754.807467 644.6592l24.149333-24.1664-24.132267-24.132267-72.379733 72.3968-120.712533-120.695467 145.032533-145.0496c19.319467 6.877867 39.509333 10.359467 60.228267 10.359467 47.803733 0 92.757333-18.619733 126.5664-52.394667 52.1728-52.206933 66.9696-129.774933 37.700267-197.632l-9.949867-23.108267-77.789867 77.789867-62.634667 0.853333 0.836267-59.733333L861.013333 79.872 837.973333 69.888c-22.613333-9.7792-46.626133-14.7456-71.3728-14.7456-47.8208 0-92.757333 18.619733-126.5152 52.411733-49.493333 49.4592-65.399467 121.719467-41.984 186.948267l-144.981333 144.981333-205.175467-205.141333 24.149333-24.132267L139.383467 77.499733l-72.465067 72.362667 132.7616 132.744533 24.1152-24.132267 205.175467 205.141333L283.989333 608.597333c-19.370667-6.929067-39.645867-10.427733-60.433067-10.427733-47.803733 0-92.757333 18.6368-126.532267 52.4288-52.2752 52.241067-67.054933 129.928533-37.632 197.870933l9.984 23.04 79.291733-79.291733 59.716267-0.802133-0.853333 62.634667L129.7408 931.84l23.108267 9.9328c22.545067 9.728 46.472533 14.660267 71.099733 14.660267 47.8208 0 92.740267-18.602667 126.5152-52.394667 49.425067-49.425067 65.3312-121.6 42.069333-186.7264l145.066667-145.066667 120.712533 120.661333-72.430933 72.430933 24.132267 24.132267 24.132267-24.132267 180.992 180.992c16.110933 16.128 37.563733 25.002667 60.347733 25.002667s44.219733-8.874667 60.347733-25.002667C969.096533 913.066667 969.079467 858.9312 935.816533 825.668267zM115.217067 149.8624l24.149333-24.098133 84.445867 84.445867L199.68 234.3424 115.217067 149.8624zM356.881067 719.906133c23.671467 54.9376 11.6736 117.76-30.5664 160-27.3408 27.3408-63.675733 42.3936-102.382933 42.3936-11.1104 0-22.050133-1.2288-32.699733-3.703467l50.210133-50.2272 1.518933-111.5648L134.314667 758.272l-51.831467 51.831467c-11.400533-48.3328 2.594133-99.328 38.673067-135.3728 27.357867-27.374933 63.709867-42.427733 102.4-42.427733 20.053333 0 39.4752 4.027733 57.8048 11.963733l10.6496 4.608 346.350933-346.333867-4.608-10.6496c-23.825067-55.022933-11.844267-117.879467 30.464-160.187733 27.3408-27.357867 63.6928-42.410667 102.382933-42.410667 11.2128 0 22.237867 1.262933 32.989867 3.754667l-51.797333 51.797333-1.501867 108.663467 111.5648-1.518933 50.261333-50.244267c11.264 48.247467-2.747733 99.157333-38.7072 135.133867-27.374933 27.3408-63.726933 42.3936-102.434133 42.3936-19.985067 0-39.3728-3.9936-57.6512-11.861333l-10.632533-4.590933-346.402133 346.453333L356.881067 719.906133zM911.701333 922.197333c-9.6768 9.659733-22.545067 15.0016-36.215467 15.0016-13.687467 0-26.538667-5.341867-36.215467-15.0016L658.261333 741.205333l72.3968-72.3968 181.009067 180.992C931.652267 869.768533 931.652267 902.229333 911.701333 922.197333z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangmu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M483.544925 483.631906H202.836685c-66.339918 0-120.42779-52.807716-120.42779-118.030184V202.710818c0-31.782867 12.682857-61.928445 35.610032-84.780918 22.886243-22.812565 53.046147-35.434024 84.817758-35.434024h162.890904c65.10581 0 117.818359 53.991682 117.818359 120.214942v280.921088z m-280.70824-340.760964c-32.751938 0-60.052724 27.203572-60.052725 59.839876v162.890904c0 32.19833 26.736944 58.678424 60.052725 58.678424h221.35648V202.710818c0-33.199123-26.38595-59.839877-58.4666-59.839876h-162.88988zM822.614363 483.631906H539.826765V202.710818c0-31.774681 12.495592-61.904908 35.297924-84.733846 22.816658-22.843264 52.821019-35.481096 84.599794-35.481096h162.88988c65.265446 0 118.348432 53.991682 118.348432 120.214942v162.890904c0 31.779797-12.265348 61.410652-34.546817 83.666538-22.268166 22.242584-52.026934 34.363645-83.801615 34.363646z m-222.412532-59.35176h222.412532c32.786731 0 57.973366-25.934672 57.973367-58.678424V202.710818c0-33.199123-25.733081-59.839877-57.973367-59.839876h-162.88988c-32.595372 0-59.522652 27.203572-59.522652 59.839876v221.569328zM365.726565 941.049776h-162.88988c-66.339918 0-120.42779-53.179177-120.42779-118.561279v-162.889881c0-31.79003 12.700253-61.780065 35.655058-84.562954 22.864754-22.689768 53.008284-35.122939 84.771708-35.122939h280.70824v282.57475c0 31.764448-12.059664 61.533448-34.187637 83.836407-22.220071 22.397103-51.838645 34.725896-83.629699 34.725896z m-162.88988-340.760964c-32.751938 0-60.052724 26.830065-60.052725 59.309804v162.889881c0 32.357965 26.736944 58.186214 60.052725 58.186214h162.890904c32.625048 0 58.4666-25.28078 58.466599-58.186214V600.288812H202.836685zM822.614363 941.049776h-162.88988c-66.181305 0-119.897717-53.179177-119.897718-118.561279V539.913746h282.787598c65.265446 0 118.348432 53.621245 118.348432 119.68487v162.889881c0 31.772634-12.248975 61.559031-34.499745 83.883479-22.291702 22.366404-52.065819 34.6778-83.848687 34.6778z m-222.412532-340.760964v222.199685c0 32.357965 26.365484 58.186214 59.522652 58.186214h162.88988c32.786731 0 57.973366-25.28078 57.973367-58.186214v-162.889881c0-33.039487-25.733081-59.309804-57.973367-59.309804H600.201831z" fill="#272636" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangmu1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M794.5216 164.22912H229.53984A117.0432 117.0432 0 0 0 112.64 281.12896v333.33248a117.00224 117.00224 0 0 0 116.89984 116.8384h336.83456v112.49664a15.95392 15.95392 0 1 0 25.6 12.73856l68.03456-51.34336 69.5296 51.44576a16.03584 16.03584 0 0 0 25.4976-12.84096v-112.49664h39.50592a116.98176 116.98176 0 0 0 116.8384-116.8384V281.12896a117.0432 117.0432 0 0 0-116.85888-116.89984z m-143.58528 468.8896a118.43584 118.43584 0 0 1-118.272-118.35392 118.43584 118.43584 0 0 1 118.272-118.33344 118.49728 118.49728 0 0 1 118.39488 118.33344 118.51776 118.51776 0 0 1-118.39488 118.35392z m18.49344 139.30496a16.01536 16.01536 0 0 0-19.12832 0.1024l-51.95776 39.19872V655.36a148.48 148.48 0 0 0 52.59264 9.70752 149.4016 149.4016 0 0 0 72.11008-18.47296v165.53984l-53.61664-39.71072z m209.98144-157.96224a84.992 84.992 0 0 1-84.91008 84.91008h-39.50592v-72.31488c0-1.2288-0.43008-2.29376-0.67584-3.44064a149.77024 149.77024 0 0 0 46.94016-108.83072c0-82.88256-67.44064-150.28224-150.34368-150.28224-82.8416 0-150.2208 67.42016-150.2208 150.28224a150.26176 150.26176 0 0 0 65.67936 124.12928v60.45696H229.53984a84.992 84.992 0 0 1-84.95104-84.91008V281.12896a85.03296 85.03296 0 0 1 84.95104-84.95104h564.96128a85.03296 85.03296 0 0 1 84.91008 84.95104v333.33248z"  ></path>' +
    '' +
    '<path d="M747.88864 280.43264H276.19328a15.9744 15.9744 0 1 0 0 31.9488h471.69536a15.9744 15.9744 0 0 0 0-31.9488zM419.59424 425.472h-143.40096a15.9744 15.9744 0 1 0 0 31.92832h143.40096a15.9744 15.9744 0 0 0 0-31.92832zM419.59424 570.49088h-143.40096a15.9744 15.9744 0 1 0 0 31.92832h143.40096a15.9744 15.9744 0 1 0 0-31.92832z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)