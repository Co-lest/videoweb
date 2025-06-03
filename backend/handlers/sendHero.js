import Joi from "joi";

const itemSchema = Joi.object({
    name: Joi.string().required(),
    value: Joi.number().required(),
  });
  

const Hero = (req, res) => {
    const { error, value } = itemSchema.validate(req.body);
  
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
  
    const newItem = value;
    console.log('Received item:', newItem);
    res.status(201).json({ message: 'Item created successfully', item: newItem });
}

export default Hero;