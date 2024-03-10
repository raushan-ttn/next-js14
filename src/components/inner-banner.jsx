import Breadcrumb from "./breadcrumb";

export const InnerBanner = ({ data }) => {
  return (
    <div className="bg-image ">
      <div className="overlay">
        <div className="cart-container min-h-[175px] ">
          <div className="py-12">
            <p className="text-3xl text-white capitalize font-extrabold pb-3">
              {data.title}
            </p>
            <Breadcrumb />
          </div>
        </div>
      </div>
    </div>
  );
};
