export const DeployButton = ({ link, style }) => {
  const btnstyle = {
    cursor: "pointer",
    width: 131,
    display: "block",
    ...style
  };
  return (
    <a href={link} style={btnstyle} target="_blank">
      <svg
        width="131"
        height="41"
        viewBox="0 0 131 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="131" height="41" fill="#101509" />
        <rect width="131" height="41" fill="#101509" />
        <path
          d="M23.5656 13.0934C23.7203 13.0041 23.9109 13.0041 24.0656 13.0934L31.2696 17.2523C31.4363 17.3485 31.4363 17.5891 31.2696 17.6853L25.7709 20.8597C25.6042 20.9559 25.6042 21.1965 25.7709 21.2927L29.5767 23.4898C29.7434 23.586 29.7434 23.8266 29.5767 23.9228L25.7732 26.1186C25.6185 26.2079 25.4279 26.2079 25.2732 26.1186L17.6806 21.7354C17.5139 21.6392 17.5139 21.3986 17.6806 21.3024L21.7329 18.963C21.7334 18.9627 21.734 18.9625 21.7346 18.9625C21.7352 18.9625 21.7357 18.9624 21.7362 18.9621L23.1802 18.1285C23.3469 18.0323 23.3469 17.7917 23.1802 17.6955L19.7621 15.7222C19.5954 15.6259 19.5954 15.3854 19.7621 15.2891L23.5656 13.0934Z"
          fill="#E6DB3D"
        />
        <path
          d="M15.2161 10.5337C15.0057 10.4143 14.7654 10.6336 14.8649 10.854L18.2633 18.4337C18.3224 18.5645 18.2594 18.7181 18.1254 18.7698L12.41 21.5712C12.2085 21.649 12.1938 21.9285 12.3861 22.027L28.8594 30.4605C29.0788 30.5728 29.3112 30.3334 29.1924 30.1175L27.0783 26.2728C27.0107 26.1501 26.8555 26.1067 26.7342 26.1768L25.6414 26.8077C25.5641 26.8523 25.4688 26.8523 25.3914 26.8077L16.6052 21.7354C16.4385 21.6392 16.4385 21.3986 16.6052 21.3024L20.6583 18.9625H20.6592H20.6602L22.1048 18.1285C22.2715 18.0323 22.2715 17.7917 22.1048 17.6955L18.6867 15.7222C18.52 15.626 18.52 15.3854 18.6867 15.2892L20.7426 14.1023C20.91 14.0057 20.9091 13.7638 20.741 13.6684L15.2161 10.5337Z"
          fill="#F5F9F0"
        />
        <rect x="42.5" y="8" width="1" height="25" fill="#F5F9F0" />
        <path
          d="M55.314 14.4H59.454C61.014 14.4 62.154 14.772 62.874 15.516C63.594 16.26 63.954 17.448 63.954 19.08V22.32C63.954 23.952 63.594 25.14 62.874 25.884C62.154 26.628 61.014 27 59.454 27H55.314V25.578H56.394V15.804H55.314V14.4ZM59.238 25.596C59.79 25.596 60.264 25.542 60.66 25.434C61.068 25.326 61.404 25.146 61.668 24.894C61.932 24.63 62.124 24.282 62.244 23.85C62.376 23.418 62.442 22.872 62.442 22.212V19.188C62.442 18.528 62.376 17.982 62.244 17.55C62.124 17.118 61.932 16.776 61.668 16.524C61.404 16.26 61.068 16.074 60.66 15.966C60.264 15.858 59.79 15.804 59.238 15.804H57.906V25.596H59.238ZM67.2535 22.968C67.2895 23.856 67.5655 24.57 68.0815 25.11C68.5975 25.65 69.3175 25.92 70.2415 25.92C70.6615 25.92 71.0275 25.872 71.3395 25.776C71.6515 25.68 71.9155 25.548 72.1315 25.38C72.3595 25.212 72.5395 25.02 72.6715 24.804C72.8155 24.576 72.9295 24.336 73.0135 24.084L74.3455 24.444C74.0935 25.272 73.6255 25.95 72.9415 26.478C72.2695 26.994 71.3575 27.252 70.2055 27.252C69.5695 27.252 68.9815 27.144 68.4415 26.928C67.9135 26.7 67.4575 26.382 67.0735 25.974C66.6895 25.566 66.3895 25.08 66.1735 24.516C65.9575 23.952 65.8495 23.328 65.8495 22.644V22.212C65.8495 21.588 65.9575 21.006 66.1735 20.466C66.4015 19.926 66.7135 19.464 67.1095 19.08C67.5055 18.684 67.9675 18.378 68.4955 18.162C69.0355 17.934 69.6175 17.82 70.2415 17.82C70.9735 17.82 71.6035 17.958 72.1315 18.234C72.6715 18.498 73.1095 18.828 73.4455 19.224C73.7935 19.62 74.0455 20.052 74.2015 20.52C74.3695 20.988 74.4535 21.42 74.4535 21.816V22.968H67.2535ZM70.2415 19.152C69.8455 19.152 69.4735 19.218 69.1255 19.35C68.7895 19.47 68.4895 19.644 68.2255 19.872C67.9735 20.1 67.7635 20.37 67.5955 20.682C67.4395 20.982 67.3375 21.312 67.2895 21.672H73.0495C73.0255 21.288 72.9295 20.94 72.7615 20.628C72.6055 20.316 72.3955 20.052 72.1315 19.836C71.8795 19.62 71.5855 19.452 71.2495 19.332C70.9255 19.212 70.5895 19.152 70.2415 19.152ZM77.969 30.6H76.565V18.072H77.969V19.476H78.185C78.497 18.936 78.929 18.528 79.481 18.252C80.033 17.964 80.633 17.82 81.281 17.82C81.833 17.82 82.355 17.922 82.847 18.126C83.339 18.33 83.771 18.624 84.143 19.008C84.527 19.392 84.827 19.866 85.043 20.43C85.271 20.994 85.385 21.636 85.385 22.356V22.716C85.385 23.448 85.277 24.096 85.061 24.66C84.845 25.224 84.545 25.698 84.161 26.082C83.789 26.466 83.351 26.76 82.847 26.964C82.343 27.156 81.809 27.252 81.245 27.252C80.957 27.252 80.663 27.216 80.363 27.144C80.063 27.084 79.775 26.988 79.499 26.856C79.235 26.712 78.989 26.544 78.761 26.352C78.533 26.148 78.341 25.908 78.185 25.632H77.969V30.6ZM80.957 25.92C81.389 25.92 81.785 25.848 82.145 25.704C82.505 25.548 82.817 25.332 83.081 25.056C83.357 24.78 83.567 24.444 83.711 24.048C83.867 23.652 83.945 23.208 83.945 22.716V22.356C83.945 21.876 83.867 21.444 83.711 21.06C83.567 20.664 83.357 20.328 83.081 20.052C82.817 19.764 82.499 19.542 82.127 19.386C81.767 19.23 81.377 19.152 80.957 19.152C80.537 19.152 80.147 19.236 79.787 19.404C79.427 19.56 79.109 19.782 78.833 20.07C78.569 20.358 78.359 20.706 78.203 21.114C78.047 21.51 77.969 21.948 77.969 22.428V22.644C77.969 23.136 78.047 23.586 78.203 23.994C78.359 24.39 78.569 24.732 78.833 25.02C79.109 25.308 79.427 25.53 79.787 25.686C80.147 25.842 80.537 25.92 80.957 25.92ZM87.5505 25.704H90.7905V15.696H87.6585V14.4H92.1945V25.704H95.4345V27H87.5505V25.704ZM106.636 22.644C106.636 23.388 106.51 24.048 106.258 24.624C106.018 25.188 105.694 25.668 105.286 26.064C104.878 26.448 104.398 26.742 103.846 26.946C103.306 27.15 102.742 27.252 102.154 27.252C101.554 27.252 100.984 27.15 100.444 26.946C99.9039 26.742 99.4299 26.448 99.0219 26.064C98.6139 25.668 98.2839 25.188 98.0319 24.624C97.7919 24.048 97.6719 23.388 97.6719 22.644V22.428C97.6719 21.696 97.7919 21.048 98.0319 20.484C98.2839 19.908 98.6139 19.422 99.0219 19.026C99.4419 18.63 99.9219 18.33 100.462 18.126C101.002 17.922 101.566 17.82 102.154 17.82C102.742 17.82 103.306 17.922 103.846 18.126C104.386 18.33 104.86 18.63 105.268 19.026C105.688 19.422 106.018 19.908 106.258 20.484C106.51 21.048 106.636 21.696 106.636 22.428V22.644ZM102.154 25.92C102.586 25.92 102.982 25.848 103.342 25.704C103.714 25.548 104.038 25.326 104.314 25.038C104.59 24.75 104.806 24.408 104.962 24.012C105.118 23.604 105.196 23.148 105.196 22.644V22.428C105.196 21.948 105.118 21.51 104.962 21.114C104.806 20.706 104.59 20.358 104.314 20.07C104.038 19.782 103.714 19.56 103.342 19.404C102.97 19.236 102.574 19.152 102.154 19.152C101.734 19.152 101.338 19.236 100.966 19.404C100.594 19.56 100.27 19.782 99.9939 20.07C99.7179 20.358 99.5019 20.706 99.3459 21.114C99.1899 21.51 99.1119 21.948 99.1119 22.428V22.644C99.1119 23.148 99.1899 23.604 99.3459 24.012C99.5019 24.408 99.7179 24.75 99.9939 25.038C100.27 25.326 100.588 25.548 100.948 25.704C101.32 25.848 101.722 25.92 102.154 25.92ZM115.353 25.38H115.137C114.849 25.956 114.471 26.412 114.003 26.748C113.535 27.084 112.941 27.252 112.221 27.252C111.729 27.252 111.273 27.168 110.853 27C110.445 26.844 110.091 26.604 109.791 26.28C109.503 25.956 109.275 25.554 109.107 25.074C108.951 24.594 108.873 24.036 108.873 23.4V18.072H110.277V23.22C110.277 24.156 110.469 24.84 110.853 25.272C111.237 25.704 111.825 25.92 112.617 25.92C113.469 25.92 114.135 25.632 114.615 25.056C115.107 24.468 115.353 23.688 115.353 22.716V18.072H116.757V29.196C116.757 29.604 116.625 29.94 116.361 30.204C116.109 30.468 115.779 30.6 115.371 30.6H110.277V29.304H114.867C115.191 29.304 115.353 29.124 115.353 28.764V25.38Z"
          fill="#F5F9F0"
        />
      </svg>
    </a>
  );
};
