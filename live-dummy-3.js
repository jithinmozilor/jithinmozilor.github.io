{
  "common": {  
      "css": ".cky-consent-bar-trigger,
              .cky-consent-bar,
              .cky-modal,
              .cky-consent-bar-trigger *,
              .cky-consent-bar *,
              .cky-modal * {
                  box-sizing: border-box;
              }
              .cky-consent-bar-trigger *:focus,
              .cky-consent-bar *:focus,
              .cky-modal *:focus {
                  outline: 0;
              }
              .cky-consent-bar-trigger {
                  position: fixed;
                  right: 30px;
                  padding: 2px 5px;
                  font-size: 13px;
                  cursor: pointer;
                  font-family: inherit;
                  animation: slide-up 0.4s ease;
                  z-index: 9997;
              }
              .cky-consent-bar {
                  font-family: inherit;
                  position: fixed;
                  z-index: 9997;
              }
              .cky-consent-bar .cky-consent-title {
                font-size: 15px;
                font-weight: bold;
                margin-bottom: 3px;
              }
              .cky-consent-bar p { 
                  line-height: 20px;
                  font-size: 13px;
                  font-weight: normal;
                  margin-bottom: 0;
                  margin-top: 0;
              }
              .cky-btn {
                  font-size: 12px;
                  padding: .5rem 1rem;
                  background: none;
                  cursor: pointer;
                  display: inline-block;
                  text-align: center;
                  white-space: nowrap;
                  vertical-align: middle;
                  -webkit-user-select: none;
                  -moz-user-select: none;
                  -ms-user-select: none;
                  user-select: none;
                  border: 1px solid transparent;
                  line-height: 1;
                  transition: all .15s ease-in-out;
                  margin: 0;
                  min-height: auto;
                  font-weight: normal;
                  border-radius: 0;
              }
              .cky-btn:hover {
                opacity: .8;
              }
              .cky-btn:focus {
                outline: 0;
              }
              .cky-button-wrapper .cky-btn {
                margin-right: 15px;
              }
              .cky-button-wrapper .cky-btn:last-child {
                margin-right: 0;
              }
              .cky-btn.cky-btn-custom-accept {
                  margin: 1.5rem 1rem;
                  font-weight: 600;
                  white-space: initial;
                  word-break: break-word;
              }        
              .cky-btn-readMore {
                  cursor: pointer;
                  font-size: 13px;
                  text-decoration: underline;
                  margin-left: 3px;
              }
              .cky-btn-doNotSell {
                cursor: pointer;
                white-space: nowrap;
                font-weight: bold;
                font-size: 13px;
                text-decoration: underline;
                margin-left: 3px;
              }
              .cky-consent-bar.cky-logo-active .cky-content-logo-outer-wrapper { 
                display: flex;
                align-items: center;
              }
              .cky-consent-bar.cky-logo-active .cky-logo {
                margin-right: 30px;
              }
              @media (max-width: 540px) {
                .cky-consent-bar.cky-logo-active .cky-content-logo-outer-wrapper {
                  display: block;
                }
              }
              .cky-tab {
                display: -ms-flexbox;
                display: flex;
              }
              .cky-tab-menu {
                flex: 0 0 25%;
                max-width: 25%;
              }
              @media (max-width: 991px) {
                .cky-tab-menu {
                  flex: 0 0 40%;
                  max-width: 40%;
                }
              }
              .cky-tab-content {
                flex: 0 0 75%;
                max-width: 75%;
                background: transparent;
                padding: 15px 20px;
              }
              @media (max-width: 991px) {
                .cky-tab-content {
                  flex: 0 0 60%;
                  max-width: 60%;
                }
              }
              @media (max-width: 767px) {
                .cky-tab-content {
                  padding: 15px;
                }
              }
              .cky-tab-item {
                font-size: 11px;
                cursor: pointer;
                font-weight: normal;
                border-bottom: 1px solid;
                border-right: 1px solid;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                line-height: 1.5;
              }
              @media (max-width: 767px) {
                .cky-tab-item {
                    font-size: 11px;
                    padding: .75rem .75rem;
                }
              }
              .cky-tab-item-active {
                cursor: initial;
                border-right: 0;
              }
              .cky-tab-content .cky-tab-desc,
              .cky-tab-content .cky-tab-desc p {
                  font-size: 12px;
              }
              .cky-tab-title {
                font-size: 13px;
                margin-bottom: 11px;
                margin-top: 0;
                font-family: inherit;
                font-weight: bold;
                line-height: 1;
                display: flex;
                align-items: center;
              }
              .cky-tab-content .cky-tab-content-item:not(.cky-tab-content-active) {
                display: none;
              }
              .cky-category-direct {
                  display: -ms-flexbox;
                  display: flex;
                  -ms-flex-wrap: wrap;
                  flex-wrap: wrap;
                  padding-top: 15px;
                  margin-top: 15px;
                  border-top: 1px solid #d4d8df;
              }
              .cky-category-direct .cky-btn-custom-accept {
                  margin: 0 0 0 auto;
              }
              .cky-category-direct-item {
                  display: -ms-flexbox;
                  display: flex;
                  -webkit-box-align: center;
                  -ms-flex-align: center;
                  align-items: center;
                  margin-right: 32px;
                  margin-bottom: 15px;
              }
              .cky-category-direct-item:last-child {
                  margin-right: 0;
              }
              .cky-category-direct-item .cky-switch {
                  margin-left: 0;
              }
              .cky-category-direct-item .cky-category-direct-name {
                  margin-left: 10px;
                  font-size: 12px;
                  font-weight: 600;
              }
              .cky-category-direct +.cky-detail-wrapper {
                 margin-top: 10px;
              }
              .cky-table-wrapper {
                  width: 100%;
                  max-width: 100%;
                  overflow: auto;
              }
              .cky-cookie-audit-table {
                  font-family: inherit;
                  border-collapse: collapse;
                  width: 100%;
                  margin-top: 10px;
              }
              .cky-cookie-audit-table th {
                  background-color: #d9dfe7;
                  border: 1px solid #cbced6;
              }
              .cky-cookie-audit-table td {
                  border: 1px solid #d5d8df;
              }
              .cky-cookie-audit-table th,
              .cky-cookie-audit-table td {
                  text-align: left;
                  padding: 10px;
                  font-size: 12px;
                  color: #000000;
                  word-break:normal;
              }
              .cky-cookie-audit-table tr:nth-child(2n+1) td {
                  background: #f1f5fa;
              }
              .cky-cookie-audit-table tr:nth-child(2n) td {
                  background: #ffffff;
              }
              .cky-audit-table-element h5 { 
               margin: 25px 0 2px 0;
              }
              .cky-audit-table-element .cky-table-wrapper { 
                  margin-bottom: 1rem; 
              }
              .cky-consent-bar.cky-rtl {
                  direction: rtl;
                  text-align: right;
              }
              .cky-consent-bar.cky-rtl .cky-button-wrapper .cky-btn {
                  margin-right: 0;
                  margin-left: 15px;
              }
              .cky-consent-bar.cky-rtl .cky-button-wrapper .cky-btn:last-child {
                  margin-left: 0;
              }
              .cky-consent-bar.cky-rtl .cky-btn-readMore  {
                  margin-left: 0;
                  margin-right: 6px;
              }
              .cky-consent-bar.cky-rtl.cky-logo-active .cky-logo {
                  margin-right: 0px;
                  margin-left: 30px;
              }
              .cky-switch {
                position: relative;
                min-height: 13px;
                padding-left: 25px;
                font-size: 14px;
                margin-left: 20px;
                margin-bottom: 0;
                display: inline-block;
              }
              .cky-switch input[type='checkbox'] {
                display: none !important;
              }
              .cky-switch .cky-slider {
                background-color: #e3e1e8;
                border-radius: 34px;
                height: 13px;
                width: 25px;
                bottom: 0;
                cursor: pointer;
                left: 0;
                position: absolute;
                right: 0;
                transition: .4s;
              }
              .cky-switch .cky-slider:before {
                background-color: #fff;
                border-radius: 50%;
                bottom: 2px;
                content: '';
                height: 9px;
                left: 2px;
                position: absolute;
                transition: .4s;
                width: 9px;
              }
              .cky-switch input:checked+.cky-slider {
                background-color: #008631;
              }
              .cky-switch input:disabled+.cky-slider {
                cursor: initial;
              }
              .cky-switch input:checked+.cky-slider:before {
                transform: translateX(12px);
              }
              .cky-modal.cky-fade .cky-modal-dialog {
                transition: -webkit-transform .3s ease-out;
                transition: transform .3s ease-out;
                transition: transform .3s ease-out, -webkit-transform .3s ease-out;
                -webkit-transform: translate(0, -25%);
                transform: translate(0, -25%);
            }
            .cky-modal.cky-show .cky-modal-dialog {
                -webkit-transform: translate(0, 0);
                transform: translate(0, 0);
            }
            .cky-modal-backdrop {
                position: fixed;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 9998;
                background-color: rgba(10, 10, 10, 0.22);
                display: none;
            }
            .cky-modal-backdrop.cky-fade {
                opacity: 0;
            }
            .cky-modal-backdrop.cky-show {
                opacity: 1;
                display: block;
            }
            .cky-modal {
                position: fixed;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 99999;
                display: none;
                overflow: hidden;
                outline: 0;
                min-height: calc(100% - (.5rem * 2));
            }
            .cky-modal.cky-show {
                display: -ms-flexbox;
                display: flex;
                -ms-flex-align: center;
                align-items: center;
            }
            .cky-modal a {
                text-decoration: none;
            }
            .cky-modal .cky-modal-dialog {
                position: relative;
                max-width: calc(100% - 16px);
                width: calc(100% - 16px);
                margin: .5rem;
                pointer-events: none;
                font-family: inherit;
                font-size: 1rem;
                font-weight: 400;
                line-height: 1.5;
                color: #212529;
                text-align: left;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-align: center;
                align-items: center;
                box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.17);		
                -webkit-box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.17);
            }
            @media (min-width: 576px) {
                .cky-modal .cky-modal-dialog {
                    max-width: 500px;
                    width: 500px;
                    margin: 1.75rem auto;
                }
                .cky-modal {
                    min-height: calc(100% - (1.75rem * 2));
                }
            }
            @media (min-width: 991px) {
                .cky-modal .cky-modal-dialog {
                    max-width: 900px;
                    width: 900px;
                }
            }
            .cky-modal-content {
                display: -ms-flexbox;
                display: flex;
                -ms-flex-direction: column;
                flex-direction: column;
                width: 100%;
                pointer-events: auto;
                background-clip: padding-box;
                border: 0;
                border-radius: 4px;
                overflow: hidden;
                outline: 0;
                margin: 40px;
            }
            .cky-modal.cky-rtl {
              direction: rtl;
              text-align: right;
            }
            .ccpa.cky-modal .cky-modal-dialog {
                max-width: 300px;
                width: 300px;
                border-radius: 5px;
            }
            
            .ccpa.cky-modal .cky-modal-content {
                margin: 25px;
                text-align: center;
                font-weight: 600;
            }
            
            .ccpa.cky-modal .cky-opt-out-text {
                margin-bottom: 20px;
            }
            .cky-consent-bar .cky-consent-close,
            .cky-modal .cky-modal-close {
              z-index: 1;
              padding: 0;
              background-color: transparent;
              border: 0;
              -webkit-appearance: none;
              font-size: 12px;
              line-height: 1;
              color: #9a9a9a;
              cursor: pointer;
              min-height: auto;
              position: absolute;
              top: 14px;
              right: 18px;
            }"
  },
  "sticky": {  
      "css":"
             .cky-detail-wrapper {
                margin-top: 30px;
                border: 1px solid #d4d8df;
                border-radius: 2px;
                overflow: hidden;
              }
              .cky-tab-content {
                  width: 100%;
              }
              .cky-tab-item {
                  padding: .5rem 1rem;
                  align-items: center;
              }
              .cky-tab-content .cky-tab-desc {
                  min-height: 155px;
                  overflow-y: auto;
                  overflow-x: hidden;
                  -webkit-overflow-scrolling: touch;
              }
              @media (max-width: 767px) {
                .cky-tab-content .cky-tab-desc {
                  max-height: 155px;
                }
              }
              .cky-consent-bar.cky-rtl .cky-detail-wrapper .cky-switch {
                  margin-left: 0;
                  margin-right: 20px;
              }
              .cky-consent-bar.cky-rtl .cky-detail-wrapper .cky-tab-item {
                  border-right: none;
                  border-left: 1px solid;
              }
              .cky-consent-bar.cky-rtl .cky-detail-wrapper .cky-tab-item.cky-tab-item-active {
                  border-left: 0;
              }"
  },       
  "popup": {  
      "css":"
              .cky-modal .cky-row {
                  margin: 0 -15px;
              }
              .cky-modal .cky-close:focus {
                  outline: 0;
              }
              .cky-modal.cky-rtl .cky-modal-close {
                  left: 20px;
                  right: 0;
              }
              .cky-modal.cky-rtl .cky-tab-item {
                  border-right: none;
                  border-left: 1px solid;
              }
              .cky-modal.cky-rtl .cky-tab-item.cky-tab-item-active {
                  border-left: 0;
              }
              .cky-modal.cky-rtl .cky-switch {
                  margin-left: 0;
                  margin-right: 20px;
              }
              .cky-modal.cky-rtl .cky-modal-dialog {
                  text-align: right;
              }
              .cky-fade {
                transition: opacity .15s linear;
              }
              .cky-tab {
                  overflow: hidden;
              }
              .cky-tab-menu {
                  text-align: center;
              }
              .cky-tab-content .cky-tab-content-item {
                  width: 100%;
              }
              .cky-tab-item {
                  padding: .5rem 2rem;
                  text-align: left;
              }
              .cky-tab-content .cky-tab-desc {
                  width: 100%;
                  min-height: 225px;
                  max-height: 300px;
                  overflow-y: auto;
                  overflow-x: hidden;
                  -webkit-overflow-scrolling: touch;
              }
              @media (max-width: 767px) {
                .cky-tab-content .cky-tab-desc {
                  max-height: 225px;
                }
              }
              @media(max-width:475px) {
                .cky-modal-content {
                  margin: 30px;
                }
                .cky-btn-custom-accept {
                  margin: 1rem 0.2rem;
                  padding: 0.5rem 0.3rem;
                }
              }"
  },
  "templates" : {
      "banner": {
          "detailType":"popup",
          "css": "
              .cky-consent-bar.cky-banner {
                  padding: 15px;
                  width: 100%;
                  box-shadow: 0 -1px 10px 0 rgba(172, 171, 171, 0.3);
              }
              .cky-banner .cky-content-wrapper {
                  display: -webkit-box;
                  display: -moz-box;
                  display: -ms-flexbox;
                  display: -webkit-flex;
                  display: flex;
                  justify-content: space-between;
                  -webkit-box-align: center;
                  -moz-box-align: center;
                  -ms-flex-align: center;
                  -webkit-align-items: center;
                  align-items: center;
                    
              }
              .cky-banner .cky-button-wrapper {
                  margin-left: 20px;
                  display: -webkit-box;
                  display: -moz-box;
                  display: -ms-flexbox;
                  display: -webkit-flex;
                  display: flex;
                  -webkit-box-align: center;
                  -moz-box-align: center;
                  -ms-flex-align: center;
                  -webkit-align-items: center;
                  align-items: center;
                  flex-wrap: nowrap;
              }
              .cky-consent-bar.cky-banner.cky-rtl .cky-button-wrapper {
                  margin-left: 0;
                  margin-right: 20px;
              }
              @media (max-width: 991px) {
                  .cky-banner .cky-button-wrapper {
                      margin-left: 0;
                      margin-top: 20px;
                  }
                  .cky-consent-bar.cky-banner,
                  .cky-consent-bar.cky-banner p,
                  .cky-banner .cky-button-wrapper,
                  .cky-banner .cky-content-wrapper {
                      display: block;
                      text-align: center;
                  }
              }"
      },
      "box":{
          "detailType":"popup",
          "css": "
              .cky-consent-bar.cky-box {
                  padding: 30px;
                  max-width: 476px;
                  display: block;
                  box-shadow: 0 -1px 10px 0 rgba(172, 171, 171, 0.3);
              }
              .cky-box .cky-button-wrapper {
                margin-top: 20px;
              }
              .cky-box .cky-category-direct {
                  padding-top: 8px;
                  margin-top: 8px;
                  border-top: 0;
              }
              .cky-box .cky-category-direct +.cky-button-wrapper {
                margin-top: 10px;
              }
              @media (max-width: 991px) {
                  .cky-consent-bar.cky-box {
                          max-width: calc(100% - 40px);
                  }
              }
              @media (max-width: 991px) {
                  .cky-consent-bar.cky-box {
                      padding: 15px;
                      text-align: center;
                      left: 0px !important;
                      right: 0px !important;
                      max-width: 100%;
                  }
                  .cky-consent-bar.cky-box.box-bottom-left, .cky-consent-bar.box-bottom-right {
                    bottom: 0px !important;
                  }
                  .cky-consent-bar.cky-box.box-top-left, .cky-consent-bar.box-top-right {
                    top: 0px !important;
                  }
                  .cky-box .cky-category-direct-item {
                      margin-right: 25px;
                      margin-bottom: 10px;
                  }
              }"                            
      },
      "classic":{
          "detailType":"sticky",
          "css": "
              .cky-consent-bar.cky-classic {
                  width: 100%;
                  display: block;
                  box-shadow: 0 -1px 10px 0 rgba(172, 171, 171, 0.3);
              }
              .cky-classic .cky-content-wrapper {
                display: -webkit-box;
                display: -moz-box;
                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
                justify-content: space-between;
                -webkit-box-align: center;
                -moz-box-align: center;
                -ms-flex-align: center;
                -webkit-align-items: center;
                align-items: center;
              }
              .cky-classic .cky-button-wrapper {
                  margin-left: 20px;
                  display: -webkit-box;
                  display: -moz-box;
                  display: -ms-flexbox;
                  display: -webkit-flex;
                  display: flex;
                  -webkit-box-align: center;
                  -moz-box-align: center;
                  -ms-flex-align: center;
                  -webkit-align-items: center;
                  align-items: center;
                  flex-wrap: nowrap;
              }
              .cky-consent-bar.cky-classic p {
                text-align: left;
              }
              .cky-classic .cky-btn-settings {
                margin-left: auto;
                position: relative;
                padding-right: 1rem;
              }
              .cky-classic .cky-btn-settings:before {
                  border-style: solid;
                  border-width: 1px 1px 0 0;
                  content: '';
                  display: inline-block;
                  height: 4px;
                  right: 8px;
                  position: absolute;
                  border-color: #beb8b8;
                  top: 11px;
                  transform: rotate(135deg);
                  vertical-align: middle;
                  width: 4px;
              }
              .cky-classic .cky-btn-settings[expanded]:before {
                  transform: rotate(-45deg);
              }
              .cky-classic .cky-consent-bar.cky-rtl .cky-button-wrapper {
                  margin-left: 0;
                  margin-right: 20px;
              } 
              .cky-classic .cky-consent-bar.cky-rtl p {
                  text-align: right;
              } 
              @media(min-width: 991px) {
                  .cky-consent-bar.cky-classic {
                      padding: 15px 50px;
                  }
              }
              @media(min-width: 1150px) {
                .cky-consent-bar.cky-classic {
                    padding: 15px 130px;
                }
              }
              @media(min-width: 1415px) {
                  .cky-consent-bar.cky-classic {
                    padding: 15px 160px;
                  }
              }
              @media (max-width: 991px) {
                .cky-classic .cky-button-wrapper {
                    margin-left: 0;
                    margin-top: 20px;
                }
                .cky-consent-bar.cky-classic,
                .cky-consent-bar.cky-classic p,
                .cky-classic .cky-button-wrapper,
                .cky-classic .cky-content-wrapper {
                    display: block;
                    text-align: center;
                }
              }"                            
      }
  }
}