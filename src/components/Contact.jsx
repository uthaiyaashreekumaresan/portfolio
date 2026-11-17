import React, { useState } from 'react';
import {
  Card,
  Typography,
  TextField,
  Button,
  Alert,
  Box,
  CircularProgress
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      tempErrors.email = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) tempErrors.message = 'Please enter your message.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // Simulate sending message
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 700);
  };

  return (
    <section id="contact" className="section-padding bg-[#FAF8FF] relative">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#30234A]">
            Let's Work Together
          </h2>
          <p className="text-[#625B71] max-w-xl mx-auto mt-2 text-base">
            I'm currently learning and building projects in web development. If you have an opportunity, project idea or simply want to connect, feel free to reach out.
          </p>
          <div className="w-16 h-1 bg-[#7952B3] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 max-w-5xl mx-auto items-start">
          {/* Left Info Card */}
          <div className="lg:col-span-5">
            <Card
              sx={{
                p: { xs: 2.2, sm: 3, md: 4 },
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid #E8DFF5',
                boxShadow: '0 4px 20px rgba(76, 50, 122, 0.05)',
                height: '100%',
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, color: '#30234A', mb: 1, fontSize: { xs: '1.15rem', sm: '1.25rem' } }}
              >
                Contact Information
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#625B71', mb: 3.5, fontSize: { xs: '0.88rem', sm: '0.94rem' } }}
              >
                Feel free to reach out through any of the following channels.
              </Typography>

              {/* Items */}
              <div className="space-y-5 sm:space-y-6">
                {/* Email */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F0EAFE] border border-[#E8DFF5] flex items-center justify-center text-[#7952B3] flex-shrink-0">
                    <MailOutlineIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
                  </div>
                  <div className="min-w-0">
                    <Typography variant="caption" sx={{ fontWeight: 700, color: '#7952B3', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                      Email
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#30234A', mt: 0.2 }}>
                      <a
                        href="mailto:uthaiyashreekumaresan@gmail.com"
                        className="text-[#30234A] hover:text-[#7952B3] transition-colors break-all text-xs sm:text-sm"
                      >
                        uthaiyashreekumaresan@gmail.com
                      </a>
                    </Typography>
                  </div>
                </div>

                {/* Phone Number Contact Card - Directly Visible & Clickable */}
                <div className="group flex items-start gap-3 sm:gap-4 p-2 sm:p-2.5 -mx-2 rounded-2xl hover:bg-[#F0EAFE]/70 border border-transparent hover:border-[#C4B5FD] transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F0EAFE] border border-[#E8DFF5] flex items-center justify-center text-[#7952B3] flex-shrink-0 group-hover:bg-[#7952B3] group-hover:text-white group-hover:shadow-[0_4px_14px_rgba(121,82,179,0.3)] group-hover:scale-105 transition-all duration-300">
                    <PhoneOutlinedIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 700,
                        color: '#7952B3',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        display: 'block',
                        fontSize: '0.75rem',
                      }}
                    >
                      Phone Number
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 700, color: '#30234A', mt: 0.3 }}
                    >
                      <a
                        href="tel:9360321548"
                        className="inline-flex items-center gap-1.5 sm:gap-2 text-sm xs:text-base md:text-lg font-extrabold text-[#30234A] hover:text-[#7952B3] tracking-wide transition-colors flex-wrap"
                      >
                        <span>+91 9360321548</span>
                        <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md bg-[#FAF8FF] border border-[#C4B5FD] text-[#7952B3] font-bold group-hover:bg-[#7952B3] group-hover:text-white group-hover:border-[#7952B3] transition-all duration-200">
                          Call
                        </span>
                      </a>
                    </Typography>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F0EAFE] border border-[#E8DFF5] flex items-center justify-center text-[#7952B3] flex-shrink-0">
                    <LocationOnOutlinedIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
                  </div>
                  <div className="min-w-0">
                    <Typography variant="caption" sx={{ fontWeight: 700, color: '#7952B3', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                      Location
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#30234A', mt: 0.2, fontSize: '0.88rem' }}>
                      Pudukkottai, Tamil Nadu, India
                    </Typography>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <Card
              sx={{
                p: { xs: 2.2, sm: 3, md: 4 },
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid #E8DFF5',
                boxShadow: '0 4px 20px rgba(76, 50, 122, 0.05)',
              }}
            >
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                  <div>
                    <label className="block text-xs font-bold text-[#30234A] uppercase tracking-wider mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <TextField
                      fullWidth
                      size="small"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      error={Boolean(errors.name)}
                      helperText={errors.name}
                      sx={{
                        backgroundColor: '#FAF8FF',
                        borderRadius: '8px',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: '#E8DFF5' },
                          '&:hover fieldset': { borderColor: '#7952B3' },
                          '&.Mui-focused fieldset': { borderColor: '#7952B3' },
                        },
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#30234A] uppercase tracking-wider mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      error={Boolean(errors.email)}
                      helperText={errors.email}
                      sx={{
                        backgroundColor: '#FAF8FF',
                        borderRadius: '8px',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: '#E8DFF5' },
                          '&:hover fieldset': { borderColor: '#7952B3' },
                          '&.Mui-focused fieldset': { borderColor: '#7952B3' },
                        },
                      }}
                    />
                  </div>
                </div>

                <div className="mb-3.5">
                  <label className="block text-xs font-bold text-[#30234A] uppercase tracking-wider mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <TextField
                    fullWidth
                    size="small"
                    name="subject"
                    placeholder="Subject of your message"
                    value={formData.subject}
                    onChange={handleChange}
                    error={Boolean(errors.subject)}
                    helperText={errors.subject}
                    sx={{
                      backgroundColor: '#FAF8FF',
                      borderRadius: '8px',
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#E8DFF5' },
                        '&:hover fieldset': { borderColor: '#7952B3' },
                        '&.Mui-focused fieldset': { borderColor: '#7952B3' },
                      },
                    }}
                  />
                </div>

                <div className="mb-5">
                  <label className="block text-xs font-bold text-[#30234A] uppercase tracking-wider mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    error={Boolean(errors.message)}
                    helperText={errors.message}
                    sx={{
                      backgroundColor: '#FAF8FF',
                      borderRadius: '8px',
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#E8DFF5' },
                        '&:hover fieldset': { borderColor: '#7952B3' },
                        '&.Mui-focused fieldset': { borderColor: '#7952B3' },
                      },
                    }}
                  />
                </div>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={loading}
                  startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                  sx={{
                    py: 1.3,
                    minHeight: 48,
                    fontSize: '1rem',
                    fontWeight: 700,
                    backgroundColor: '#7952B3',
                    color: '#FFFFFF',
                    boxShadow: '0 4px 14px rgba(121, 82, 179, 0.3)',
                    '&:hover': {
                      backgroundColor: '#4C327A',
                      boxShadow: '0 6px 20px rgba(76, 50, 122, 0.4)',
                    },
                  }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>

                {submitted && (
                  <Alert
                    icon={<CheckCircleOutlineIcon fontSize="inherit" />}
                    severity="success"
                    sx={{
                      mt: 3,
                      backgroundColor: 'rgba(75, 160, 100, 0.1)',
                      color: '#2e7d32',
                      border: '1px solid rgba(75, 160, 100, 0.25)',
                    }}
                  >
                    Thank you! Your message has been prepared and received successfully.
                  </Alert>
                )}
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

