exports.set = function(req, res) {
	this.req = req;
	this.res = res;

	const request = {
		async create(Obj, jsonData) {
			console.log('hello');

			try {
				const obj = new Obj(jsonData);
				await obj.save();
				res.send(obj);
			} catch (e) {
				console.log(e);

				res.status(500).send(e);
			}
		},

		async get(Obj, id) {
			try {
				const obj = await Obj.findById(id);
				if (!obj) {
					return res.status(404).send();
				}
				res.send(obj);
			} catch (e) {
				res.status(500).send(e);
			}
		},

		async getAll(Obj) {
			try {
				const objs = await Obj.find({});
				res.send(objs);
			} catch (e) {
				res.status(500).send(e);
			}
		},

		async update(Obj, jsonData, allowedUpdates, updates) {
			const validUpdate = updates.every((update) => allowedUpdates.includes(update));
			if (!validUpdate) {
				return res.status(400).send({ error: 'invalid updates' });
			}
			try {
				const obj = await Obj.findById(req.params.id);
				if (!obj) {
					return res.status(404).send();
				}

				updates.forEach((update) => (obj[update] = jsonData[update]));

				await obj.save();
				res.send(obj);
			} catch (e) {
				res.status(500).send(e);
			}
		},

		async delete(Obj, id) {
			try {
				const obj = await Obj.findByIdAndDelete(id);
				if (!obj) {
					return res.status(404).send();
				}
				res.send(obj);
			} catch (e) {
				res.status(500).send(e);
			}
		},

		async deleteAll(Obj) {
			try {
				objs = await Obj.deleteMany({});
				res.send({ deleted: objs.deletedCount });
			} catch (e) {
				res.status.send(e);
			}
		}
	};
	return request;
};
