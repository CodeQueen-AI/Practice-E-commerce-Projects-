import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-[#F7A6C9] flex flex-col sm:flex-row sm:justify-between sm:items-start sm:text-left items-center justify-center text-center">
        <nav className="mb-4 sm:mb-0">
          <h6 className="footer-title text-[#F7418F]">Services</h6>
          <a className="link link-hover text-[#BC5A94] hover:text-[#F35588]">Authentic Beauty </a>
          <a className="link link-hover text-[#BC5A94] hover:text-[#F35588]">Delivery on time</a>
          <a className="link link-hover text-[#BC5A94] hover:text-[#F35588]">Marketing</a>
          <a className="link link-hover text-[#BC5A94] hover:text-[#F35588]">Advertisement</a>
        </nav>
        <nav className="mb-4 sm:mb-0">
          <h6 className="footer-title text-[#F7418F]">Company</h6>
          <a className="link link-hover text-[#BC5A94] hover:text-[#F35588]">Home</a>
          <a className="link link-hover text-[#BC5A94] hover:text-[#F35588]">About us</a>
          <a className="link link-hover text-[#BC5A94] hover:text-[#F35588]">Shop</a>
          <a className="link link-hover text-[#BC5A94] hover:text-[#F35588]">Contact</a>
        </nav>
        <nav className="mb-4 sm:mb-0">
          <h6 className="footer-title text-[#F7418F]">Legal</h6>
          <a className="link link-hover text-[#BC5A94] hover:text-[#F35588]">Terms of use</a>
          <a className="link link-hover text-[#BC5A94] hover:text-[#F35588]">Privacy policy</a>
          <a className="link link-hover text-[#BC5A94] hover:text-[#F35588]">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title text-[#F7418F] mb-2 sm:mb-4">Newsletter</h6>
          <fieldset className="form-control w-full sm:w-80">
            <label className="label text-[#BC5A94]">
              <span className="label-text text-center sm:text-left">Enter your email address</span>
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered border-[#BC5A94] w-full sm:w-auto"
              />
              <button
                className="btn bg-[#EC9CD3] text-white hover:bg-[#F35588] shadow-lg shadow-[#FC85AE]"
              >
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
