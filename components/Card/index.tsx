const OrderLink = ({ order }: any) => {
    const key = Object.keys(order)[0];
    const value = order[key];
    return (
      <li><a href={value} key={value} target="_blank">
        {key}
      </a></li>
    );
  };
  
  const OrdersList = ({ orders }: any) => {
    return (
      <div>
        {orders.map((order: any) => (
          <OrderLink key={order[Object.keys(order)[0]]} order={order} />
        ))}
      </div>
    );
  };
export default function Card(props: any) {
    const card = props.item;
    return (
        <>
            <div className="w-96 h-auto block rounded-lg bg-gradient-radial bg-[#2e7a84] transition-opacity text-center m-2 border-4">
                <div className="border-b-2 border-neutral-100 px-6 py-3 border-white/10 font-semibold">
                    {card.title}
                </div>
                <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight">
                        Case Orders
                    </h5>
                    <p className="mb-4 text-base ">
                        <ul>
                        
                           
                            <OrdersList orders={card.orders} />
                           
                   
                        
                        </ul>
                    </p>
                </div>
            </div>
        </>
    )
}