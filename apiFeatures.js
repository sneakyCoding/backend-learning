class APIFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    //regex / (indexing -> bigger project with alot of users)
    search() {
        //regex 
        // const search = this.queryString.sort
    }

    sort() {
        if (this.queryString.sort) {
            const sortQuery = this.queryString.sort.split(",").join(" ");
            this.query = this.query.sort(sortQuery);
        } else {
            this.query = this.query.sort("-createdAt")
        }

        return this;
    }

    //{page, limit} -> QUERY, skip(offsets)
    paginate() {
        const page = Math.max(1, Number(this.queryString.page) || 1);
        const limit = Math.min(Math.max(5, Number(this.queryString.limit) || 10), 50);
        const skip = (page - 1) * limit;

        this.query = this.query.skip(skip).limit(limit);

        return this;
    }
}