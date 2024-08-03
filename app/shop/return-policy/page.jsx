

export const metadata = {
    title: "Shop - Return Policy | Da Capo Academy of Music",
    description: "Our return policy for books and print materials.",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "Shop - Return Policy | Da Capo Academy of Music",
        description: "Our return policy for books and print materials.",
        url: "https://dacapomusic.ca/shop/return-policy",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "website"
    }
  }


const ReturnPolicyPage = () => {

  return (
        <div className="leading-8 px-5 lg:px-36 xl:px-52 py-14 bg-gray-100">
            <h1 className="text-dcam-reg-orange text-3xl mb-4">Return Policy for Da Capo Academy of Music Shop</h1>
            <p>At DCAM, we strive to ensure your complete satisfaction with your purchase. If you are not entirely satisfied with your purchase, we&apos;re here to help.</p>
            <h3 className="text-xl font-semibold mt-8 text-dcam-black">1. Return Time Frame</h3>
            <p>You have 30 calendar days to return an item from the date you received it.</p>
            <h3 className="text-xl font-semibold mt-8 text-dcam-black">2. Condition of Returned Items</h3>
            <p>To be eligible for a return, your item must be in <span className="underline">like new</span> condition. This means the book must be unused and in the same condition that you received it.</p>
            <h3 className="text-xl font-semibold mt-8 text-dcam-black">3. Defective Items</h3>
            <p>If you receive a product that is defective due to a manufacturing error or damage during shipping, you can return the item regardless of its condition, provided it was not damaged through misuse or mishandling by the customer.</p>
            <h3 className="text-xl font-semibold mt-8 text-dcam-black">4. Receipt Requirement</h3>
            <p>Please provide a receipt or proof of purchase with your return.</p>
            <h3 className="text-xl font-semibold mt-8 text-dcam-black">5. Refund Method</h3>
            <p>Once we receive your returned item, we will inspect it and notify you on the status of your refund. If your return is approved, we will initiate a refund to your original method of payment. Please note that the time it takes for your refund to appear on your account may vary depending on your card issuer&apos;s policies.</p>
            <h3 className="text-xl font-semibold mt-8 text-dcam-black">6. Return Shipping Costs</h3>
            <p>If returning by mail, you will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. To avoid this, we recommend visiting us in person if possible.</p>
            <h3 className="text-xl font-semibold mt-8 text-dcam-black">7. Non-Returnable Items</h3>
            <p>The following items cannot be returned:</p>
            <ul className="list-disc list-inside">
                <li>sale items</li>
                <li>digital products</li>
            </ul>
            <h3 className="text-xl font-semibold mt-8 text-dcam-black">8. Return Process</h3>
            <p>To initiate a return, please visit us at our location at 270 The Kingsway. If this is not possible, you can send us your item by mail along with an explanation for wanting a return. Before sending your item by mail, we recommend getting in touch with us to ensure that you qualify for a return. Just send an email to <span className="underline">info@dacapomusic.ca</span> with an explanation of why you want to return the item.</p>
            <h3 className="text-xl font-semibold mt-8 text-dcam-black">9. Exchanges</h3>
            <p>We only replace items if they are defective or damaged, provided it was not damaged through misuse or mishandling by the customer. Exchanges must be initiated within 30 days of the purchase date. If you need to exchange an item for the same product, please visit our store.</p>
        </div>
    )
}

export default ReturnPolicyPage;