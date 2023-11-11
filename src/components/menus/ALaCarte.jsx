/* eslint-disable react/prop-types */
const ALaCarte = (props) => {

    const carte  = props.data

    const { category } = props.details

    return (
        <div className="py-3">
            <h2 className="">{category}</h2>
            { 
                carte.length > 0 && carte.filter(
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