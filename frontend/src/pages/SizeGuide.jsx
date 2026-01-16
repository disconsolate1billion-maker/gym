import React, { useEffect } from 'react';

const SizeGuide = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="size-guide-page">
      <h1>Size Guide</h1>
      
      <h2>Compression Shirts</h2>
      <table className="size-table">
        <thead>
          <tr>
            <th>Size</th>
            <th>Chest (in)</th>
            <th>Length (in)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>S</td><td>34-36</td><td>27</td></tr>
          <tr><td>M</td><td>38-40</td><td>28</td></tr>
          <tr><td>L</td><td>42-44</td><td>29</td></tr>
          <tr><td>XL</td><td>46-48</td><td>30</td></tr>
        </tbody>
      </table>

      <h2>Wrestling Shorts</h2>
      <table className="size-table">
        <thead>
          <tr>
            <th>Size</th>
            <th>Waist (in)</th>
            <th>Inseam (in)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>S</td><td>28-30</td><td>7</td></tr>
          <tr><td>M</td><td>32-34</td><td>7.5</td></tr>
          <tr><td>L</td><td>36-38</td><td>8</td></tr>
          <tr><td>XL</td><td>40-42</td><td>8.5</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default SizeGuide;
