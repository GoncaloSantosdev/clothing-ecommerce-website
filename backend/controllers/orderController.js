import Order from '../models/orderModel.js';

// Create new order
const addOrderItems = async(req, res) => {
    const { orderItems, shippingAddress, paymentMethod, itemsPrice, shippingPrice, totalPrice } = req.body;

    if(orderItems && orderItems.length === 0){
        res.status(400);
        console.log('No Order Items');
    } else {
        const order = new Order({
            orderItems, 
            user: req.user._id,
            shippingAddress, 
            paymentMethod, 
            itemsPrice, 
            shippingPrice,
            totalPrice
        })

        const createdOrder = await order.save();

        res.status(201).json(createdOrder);
    }
}

// Get Order By ID
const getOrderById = async(req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email');

    if(order) {
        res.json(order);
    } else {
        res.status(404);
        console.log('Error')
    }
}

// Update Order to paid
const updateOrderToPaid = async(req, res) => {
    const order = await Order.findById(req.params.id);

    if(order) {
        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.payer.email_address
        }

        const updatedOrder = await order.save();

        res.json(updatedOrder);

    } else {
        res.status(404);
        console.log('Error')
    }
}

export {
    addOrderItems,
    getOrderById,
    updateOrderToPaid
}