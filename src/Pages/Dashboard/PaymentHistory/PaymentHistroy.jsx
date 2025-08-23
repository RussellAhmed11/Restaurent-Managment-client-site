import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";


const PaymentHistroy = () => {
    const { user } = useAuth();
    const axiosSecure = UseAxiosSecure();
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data
        }
    })
    return (
        <div>
            <h1 className="text-orange-600">Payment Histroy:{payments.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Price</th>
                            <th>Transaction Id</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            payments.map((payment,index)=> <tr key={payment._id}>
                            <th>{index + 1}</th>
                            <td>${payment.price}</td>
                            <td>{payment.transictionId}</td>
                            <td>{payment.status}</td>
                        </tr>
         )
                        }
                       

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistroy;