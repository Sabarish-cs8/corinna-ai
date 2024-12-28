import { onDomainCustomerResponses } from "@/actions/appointment";
import { onGetDomainProductsAndConnectedAccountId } from "@/actions/payments";
import PortalForm from "@/components/forms/portal/portal-form";

const CustomerPaymentPage = async (
    props:{
        params: Promise<{domainid:string; customerid:string}>
    }
) => {
    const params = await props.params;
    const questions = await onDomainCustomerResponses(params.customerid)
    const products = await onGetDomainProductsAndConnectedAccountId(
        params.domainid
    )
    if(!questions) return null

    return (

        <PortalForm 
        email={questions.email!}
        products={products?.products}
        amount={products?.amount}
        domainid={params.domainid}
        customerId={params.customerid}
        questions={questions.questions}
        stripeId={products?.stripeId!}
        type="Payment"
      />
        
    )
}

export default CustomerPaymentPage