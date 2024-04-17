import pic1 from './assets/logo.png'
import pic2 from './assets/bitcoin1.png'
import pic3 from './assets/litecoin.png'

import './styles/LogInSignUp.css'

function loginsignup() {
    return (

        <>
            <body className='body11'>
                <div className="container11">
                    <div className="image11">
                        <div className="images11">
                            <img src={pic1} alt="" style={{ height: "100px" }} />
                        </div>
                        <div className="table11">
                            <div className="header11">
                                <div className="dots11" style={{ backgroundColor: 'red' }}></div>
                                <div className="dots11" style={{ backgroundColor: 'yellow' }}></div>
                                <div className="dots11" style={{ backgroundColor: 'green' }}></div>
                            </div>
                            <div className="text11">Buy & Sell Crypto</div>
                            <div className="coins11">
                                <div className="coin11">
                                    <div className="symbol11">
                                        <img src={pic2} alt="" style={{ height: "40px", margin: '0px 10px' }} />
                                        Bitcoin
                                    </div>
                                    <div className="shortform11">BTC</div>
                                </div>
                                <div className="coin11">
                                    <div className="symbol11">
                                        <img src={pic3} alt="" style={{ height: "40px", margin: '0px 10px' }} />
                                        Litecoin
                                    </div>
                                    <div className="shortform11">LTC</div>
                                </div>
                            </div>
                        </div>
                        <div className="footer11">Trusted by 10+ Million Users</div>
                    </div>
                    <div className="form11">
                        <div className="pages11">
                            <input type="checkbox" id="check11" />
                            <div className="loginform11">
                                <header style={{ width: '100%', marginBottom: '50px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 'xxx-large' }}>Login</header>
                                <form action="#">
                                    <input type="text" placeholder="Enter your email" />
                                    <input type="password" placeholder="Enter your password" />
                                    <a href="#">Forgot password?</a>
                                    <input type="button" className="button11" value="Login" />
                                </form>
                                <div className="signup11">
                                    <span className="signup11" style={{ width: '100%' }}>Don't have an account?
                                        <label htmlFor="check">Signup</label>
                                    </span>
                                </div>
                            </div>
                            <div className="registrationform11">
                                <header className="login11" style={{ width: '100%', marginBottom: '50px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 'xxx-large' }}>Create new Account</header>
                                <div className="progressbar11">
                                    <div className="111 one">1</div>
                                    <div className="bar11"></div>
                                    <div className="211 one">2</div>
                                </div>
                                <form action="#">
                                    <input id="name" type="text" placeholder="Enter Username" />
                                    <input type="text" id="email" placeholder="Enter your email" />
                                    <input type="password" placeholder="Create a password" />
                                    <input id="sendEmailButton" type="button" className="button11" value="Signup" />
                                </form>
                                <div className="signup11">
                                    <span style={{ width: '100%' }}>Already have an account?<label htmlFor="check" style={{ marginLeft: '2px' }}>Login</label>
                                    </span>
                                </div>
                            </div>
                            <div className="otp-screen11">
                                <h2 style={{ width: '100%', justifyContent: 'center', marginBottom: '50px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 'xxx-large', color: '#137306' }}>Verify OTP</h2>
                                <input type="text" className="otp-input11" maxLength="6" />
                                <button className="verify-button11">Verify</button>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}

{/* <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
    <script type="text/javascript">
        let generatedNumericOTP; // Declare the variable in a wider scope
    
        function showOtpScreen() {
            // Hide registration form
            document.querySelector('.registration').style.display = 'none';
    
            // Show OTP screen
            document.querySelector('.otp-screen').style.display = 'flex';
    
            // Generate and assign the numeric OTP
            generatedNumericOTP = generateRandomNumericOTP();
        }
    
        function generateRandomNumericOTP() {
            const otpLength = 6;
            let otp = '';
    
            for (let i = 0; i < otpLength; i++) {
                otp += Math.floor(Math.random() * 10);
            }
    
            return otp;
        }
    
        function verifyOtp() {
            // Perform OTP verification here (you would need server-side code)
            // If OTP is verified, you can proceed with account creation or other actions
    
            // For this example, let's just hide the OTP screen
            document.querySelector('.otp-screen').style.display = 'none';
        }
    
        (function () {
            emailjs.init("OfmlMCjmuKg7pjl35");
    
            // Example: Send email when a button is clicked
            document.getElementById("sendEmailButton").addEventListener("click", function () {
                sendEmail();
            });
    
            function sendEmail() {
                emailjs.send("xdgaming", "template_n0ejzqc", {
                    name: document.getElementById("name").value,
                    User: document.getElementById("name").value,
                    message: generatedNumericOTP,
                    reciptent: document.getElementById("email").value
                })
                .then(function(response) {
                    console.log("Email sent successfully:", response);
                }, function(error) {
                    console.log("Error sending email:", error);
                });
            }
        })();
    </script>
     */}

export default loginsignup;