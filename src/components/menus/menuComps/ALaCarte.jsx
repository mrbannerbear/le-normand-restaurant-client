import useMenu from "../../custom/useMenu";

/* eslint-disable react/prop-types */
const ALaCarte = (props) => {

    const menu = useMenu()

    const { category } = props.details

    return (
        <div className="py-3">
            <h2 className="border-b w-max mx-auto border-[#607244]">{category}</h2>
            { !Array.isArray(menu) ? menu :
                menu?.length > 0 && menu?.filter(
                    each => each?.type === "a la carte" && each?.category === category.toLowerCase()
                ).map(
                    each => <div key={each.name} className="border-b-[1px] py-3">
                        <h3>{each.name}</h3>
                        <h4 className="text-xs">{each.ingredients}</h4>
                    </div>
                )
            }
        </div>
    );
};

export default ALaCarte;